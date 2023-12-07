import BookAppointmentStyle, {
    BookAppointmentFormStyle,
    BookConformStyle,
    InputStyle,
    SelectServicesStyle,
    ServiceCardContainerStyle
} from "./index.style";
import {B1, B2, H6, S2} from "../../elements/Font/Font.styled";
import {ContainedButton} from "../../elements/Button/Button";
import React, {useEffect, useState} from "react";
import {FormBorderVector} from "../../utils/vectors";
import {MDBCollapse, MDBIcon} from 'mdb-react-ui-kit';
import {useLazyQuery, useMutation} from "@apollo/client";
import {GET_STORES_QUERY} from "../../Apollo/query/GetLocateUsQuery";
import {GET_SLOTS} from "../../Apollo/query/GetAvalilableSlotQuery";
import {GET_SERVICES_QUERY} from "../../Apollo/query/GetServicesQuery";
import {v4 as uuidv4} from 'uuid';
import dateFormat from "dateformat";
import {useMediaQuery} from "react-responsive";
import * as EmailValidator from 'email-validator';
import BOOK_APPOINTMENT_MUTATION from "../../Apollo/mutation/BookAppointmentMutation";
import {useRouter} from "next/router";
import {GET_PRODUCT_BY_ID_QUERY} from "../../Apollo/query/ProductByIdQuery";
import CustomModal from "../CustomModal/CustomModal";
import Image from "next/image";


const BookAppointment = () => {
    return (
        <BookAppointmentStyle>
            <div className={"inner-div"}>
                <H6 className={"title text-center"} weight={500} margin={"0 0 8px 0"}>Book Appointment</H6>
                <B2 color={"#384955"} className={"text-center max-w-400 m-auto mb-4"}>
                    Choose from our wide variety of services and let our experts help you transform your style game
                </B2>
                <BookAppointmentForm/>
            </div>
        </BookAppointmentStyle>
    )
}

export default BookAppointment;

const BookAppointmentForm = () => {

    const router = useRouter();
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});

    const [slotList, setSlotList] = useState([]);
    const [storeList, setStoreList] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    const [error, setError] = useState({});
    const [searchStoreText, setSearchStoreText] = useState('')
    const [showStoreList, setShowStoreList] = useState(false)
    const [selectedStore, setSelectedStore] = useState({});
    const [showServiceList, setShowServiceList] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedSlot, setSelectedSlot] = useState({});
    const [productType, setProductType] = useState("services")
    const [staticModal, setStaticModal] = useState(false);

    const [inputValues, setInputValue] = useState({
        FirstName: "",
        MobileNo: "",
        EmailID: "",
        date: ""
    });

    const [loading, setLoading] = useState(false);

    const [getSlotListData] = useLazyQuery(GET_SLOTS);
    const [getStoresListData] = useLazyQuery(GET_STORES_QUERY)
    const [getServiceListData] = useLazyQuery(GET_SERVICES_QUERY)
    const [bookAppointment] = useMutation(BOOK_APPOINTMENT_MUTATION)
    const [getProductByIdData] = useLazyQuery(GET_PRODUCT_BY_ID_QUERY);

    useEffect(() => {
        fetchSlotListData();
        fetchServiceListData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (router.query && router.query.product) {
            setProductType("products");
            fetchProductById();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.query]);

    useEffect(() => {
        fetchStoreListData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchStoreText])

    const fetchSlotListData = () => {
        try {
            getSlotListData().then(({data}) => {
                if (data.availableSlots) {
                    setSlotList(data.availableSlots);
                }
            });
        } catch (error) {
            console.log(error)
        }
    }


    const fetchStoreListData = () => {
        try {
            let variables = {
                fullAddress_Icontains: searchStoreText
            }
            getStoresListData({variables: variables}).then(({data}) => {
                if (data.stores.edges) {
                    setStoreList(data.stores.edges)
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    const fetchServiceListData = () => {
        try {
            getServiceListData().then(({data}) => {
                if (data.services) {
                    setServiceList(data.services.edges);
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    const toggleShow = () => setStaticModal(!staticModal);
    const searchStore = (e) => {
        if (e.target.value !== "") {
            setShowStoreList(true)
            setSearchStoreText(e.target.value)
        } else {
            setShowStoreList(false)
            setSearchStoreText("")
        }
    }


    const handleStoreChange = (data) => {
        setShowStoreList(false)
        setSelectedStore(data)
        setSearchStoreText("")
    }

    const handleServiceChange = (service) => {
        let tmp_selected_service = [...selectedServices];
        let index = selectedServices.findIndex(item => item.id === service.id);
        if (index > -1) {
            tmp_selected_service.splice(index, 1)

        } else {
            tmp_selected_service.push(service)
        }
        setSelectedServices(tmp_selected_service)
    }

    const checkServicesSelected = (service) => {
        let index = selectedServices.findIndex(item => item.id === service.id)
        return index > -1;
    }

    const getSelectedServices = () => {
        let data = selectedServices.map(item => item.name);
        return data.toString();
    }


    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        if (name === "MobileNo") {
            if (isNaN(value)) {
                return false;
            }
        }
        setInputValue({...inputValues, [name]: value});
    }

    const handleSlotChange = (e) => {
        let slot = slotList.find((item) => item.id === e.target.value)
        if (slot) {
            setSelectedSlot(slot)
        }
    }

    const removeService = (data) => {
        if (productType === "products") {
            router.replace({
                query: {},
            }).then(r => {
                if (r) {
                    setProductType("services")
                    removeServiceFromArray(data);
                }
            });
        } else {
            removeServiceFromArray(data);
        }
    }

    const removeServiceFromArray = (data) => {
        let tmp_selected_service = [...selectedServices];
        let index = selectedServices.findIndex(item => item.id === data.id);
        if (index > -1) {
            tmp_selected_service.splice(index, 1)
        }
        setSelectedServices(tmp_selected_service)
    }

    const submitForm = () => {
        if (inputValues.FirstName === "") {
            setError({
                FirstName: "Please enter your name"
            })
        } else if (inputValues.EmailID === "") {
            setError({
                EmailID: "Please enter your email id",
            })
        } else if (EmailValidator.validate(inputValues.EmailID) === false) {
            setError({
                EmailID: "Please enter valid email id",
            })
        } else if (inputValues.MobileNo === "") {

            setError({
                MobileNo: "Please enter your mobile number",
            })
        } else if (inputValues.MobileNo.length < 10 || inputValues.MobileNo.length > 10) {

            setError({
                MobileNo: "Please enter valid mobile number",
            })
        } else if (inputValues.date === "") {

            setError({
                date: "Please select appointment date",
            })
        } else if (Object.keys(selectedSlot).length === 0) {
            setError({
                time: "Please select time slot",
            })
        } else if (Object.keys(selectedStore).length === 0) {
            setError({
                store: "Please select store",
            })
        } else if (selectedServices.length === 0 && productType === "services") {
            setError({
                service: "Please select service",
            })
        } else {
            setError({})
            let variables = {
                bookingType: productType === "services" ? "SERVICE" : "PRODUCT",
                date: dateFormat(inputValues.date, "dd-mm-yyyy"),
                email: inputValues.EmailID,
                name: inputValues.FirstName,
                phoneNumber: inputValues.MobileNo,
                storeId: selectedStore.id,
                timeId: selectedSlot.id,
            }
            if (productType === "services") {
                let serviceIds = selectedServices.map(item => item.id);
                variables = {
                    ...variables,
                    serviceIds: serviceIds
                }
            } else {
                variables = {
                    ...variables,
                    productId: router.query.product
                }
            }
            setLoading(true);
            bookAppointment({variables: variables}).then(({data}) => {
                setLoading(false);
                if (data.bookAppointment) {
                    toggleShow()
                    setInputValue({
                        FirstName: "",
                        MobileNo: "",
                        EmailID: "",
                        date: ""
                    })
                    setSelectedSlot({});
                    setSelectedStore({});
                    setSelectedServices([]);
                    if (productType === "products") {
                        router.replace({
                            query: {},
                        }).then(r => {
                            if (r) {
                                setProductType("services")
                            }
                        });
                    }
                }
            }).catch((error) => {
                setLoading(false);
                console.log(error)
            })

        }
    }

    useEffect(() => {
        if (Object.keys(error).length > 0) {
            const input = document.querySelector(
                `.text-danger`
            );

            input?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'start',
            });
        }
    }, [error])

    const fetchProductById = () => {
        let variables = {
            productId: router.query.product
        };
        getProductByIdData({variables: variables})
            .then(({data}) => {
                if (data.productById) {
                    setSelectedServices([data.productById]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0];
        setInputValue((prevState) => ({...prevState, date: currentDate}));
    }, []);


    return (
        <BookAppointmentFormStyle>
            <div className={"inner-form"}>
                <div className={"form"}>
                    <InputStyle>
                        <div>
                            <input type="text" name="FirstName" placeholder="Name" value={inputValues.FirstName}
                                   onChange={onChangeHandler}/>
                            {
                                error?.FirstName &&
                                <p className={"text-danger mb-0 mt-2"}>{error.FirstName}</p>
                            }
                        </div>
                        <div>
                            <input type="email" name="EmailID" placeholder="Email Address" value={inputValues.EmailID}
                                   onChange={onChangeHandler}/>

                            {
                                error?.EmailID &&
                                <p className={"text-danger mb-0 mt-2"}>{error.EmailID}</p>
                            }
                        </div>
                        <div>
                            <input type="text" name="MobileNo" pattern="[0-9]*" maxLength="10"
                                   value={inputValues.MobileNo} placeholder={"Phone Number"}
                                   onChange={onChangeHandler}/>
                            {
                                error?.MobileNo &&
                                <p className={"text-danger mb-0 mt-2"}>{error.MobileNo}</p>
                            }
                        </div>
                        <div className={"d-flex w-100"} style={{gap: "12px"}}>
                            <div className={"w-100"}>
                                <input type="date"
                                    // min={`${getCurrentDate()}`.substr(0, 10)}
                                       name={"date"}
                                       onChange={onChangeHandler}
                                       value={inputValues.date}
                                       min={new Date().toISOString().split('T')[0]}
                                />
                                {
                                    error?.date &&
                                    <p className={"text-danger mb-0 mt-2"}>{error.date}</p>
                                }
                            </div>
                            <div className={"w-100 "} style={{cursor: "pointer"}}>
                                <select name="Time" onChange={handleSlotChange}
                                        value={selectedSlot?.id}
                                        style={{cursor: "pointer"}}
                                >
                                    <option selected={true} hidden>Select Time
                                    </option>
                                    {
                                        slotList.map((item, index) => {
                                            return <option key={index}
                                                           value={item.id}>{isDesktopOrLaptop ? item.time : item.time.toLowerCase().replaceAll(' ', '').trim()}</option>
                                        })
                                    }
                                </select>
                                {
                                    error?.time &&
                                    <p className={"text-danger mb-0 mt-2"}>{error.time}</p>
                                }
                            </div>
                        </div>
                        <SelectServicesStyle>
                            <div className={'select-our-service'}>
                                <>
                                    <input
                                        value={searchStoreText}
                                        type="text"
                                        name="fname"
                                        placeholder={(selectedStore?.addressLine2 === "" || selectedStore?.addressLine2 === undefined)
                                            ? "Search Your Store" : selectedStore?.addressLine2}
                                        onChange={(event) => searchStore(event)}
                                        className={'search-store search-store-data'}
                                    />
                                </>

                                <MDBCollapse show={showStoreList}
                                             className={"overflow-auto opints-to-select"}>
                                    {storeList?.length > 0 ?
                                        storeList.map((item) => {
                                            return (
                                                <div key={uuidv4()}
                                                     className={"d-flex justify-content-between single-service"}
                                                     onClick={() => handleStoreChange(item.node)}
                                                >
                                                    <B1 className={"d-flex align-items-center py-2"} color={"#BFBBC2"}>
                                                        {
                                                            item.node.fullAddress
                                                        }
                                                    </B1>
                                                </div>
                                            )
                                        }) : <B1 className={"d-flex align-items-center justify-content-center align-content-center py-5"} color={"#BFBBC2"}>
                                            No store available
                                        </B1>
                                    }
                                </MDBCollapse>
                            </div>
                            {
                                error?.store &&
                                <p className={"text-danger mb-0 mt-2"}>{error.store}</p>
                            }
                        </SelectServicesStyle>
                    </InputStyle>
                    {
                        productType === "services" ?
                            <SelectServicesStyle>
                                <div className={'select-our-services'} style={{marginTop: "40px", cursor: "pointer"}}>
                                    {
                                        selectedServices.length > 0 ?
                                            <>
                                                <B1 className={"selected-value"}
                                                    onClick={() => setShowServiceList(!showServiceList)}
                                                    weight={400}
                                                    color={"#BFBBC2"}
                                                >{getSelectedServices()}</B1>
                                            </>
                                            :
                                            <B1 className={"selected-value"}
                                                onClick={() => setShowServiceList(!showServiceList)}
                                                weight={400}
                                                color={"#BFBBC2"}
                                            >Select Services</B1>
                                    }

                                    <MDBCollapse show={showServiceList} className={"overflow-auto opints-to-select"}>
                                        {
                                            serviceList.map((item, index) => {
                                                return (
                                                    <div
                                                        className={"d-flex justify-content-between align-items-center px-2 single-service"}
                                                        onClick={() => handleServiceChange(item.node)} key={uuidv4()}>
                                                        <B1 className={"d-flex align-items-center py-2"}
                                                            color={"#BFBBC2"}>
                                                            {item.node.name}
                                                        </B1>
                                                        {
                                                            checkServicesSelected(item.node) ?
                                                                <MDBIcon fas icon="minus" style={{color: "#5B307C"}}/>
                                                                :
                                                                <MDBIcon fas icon="plus" style={{color: "#5B307C"}}/>

                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </MDBCollapse>
                                </div>
                                {
                                    error?.service &&
                                    <p className={"text-danger mb-0 mt-2"}>{error.service}</p>
                                }
                            </SelectServicesStyle> : null
                    }
                </div>
                <div className={"form-summery"}>
                    <FormBorderVector className={"top-border-vector"}/>
                    <FormBorderVector className={"bottom-border-vector"}/>
                    <div className={"main-content"}>

                        <S2 weight={400} color={"#384955"} className={"text-center"}>Appointment Summary</S2>
                        <hr/>
                        <S2 color={"#BFBBC2"} weight={400}>
                            {
                                inputValues.FirstName === "" ? "Name" : inputValues.FirstName
                            }
                        </S2>
                        <div className={"d-flex justify-content-between my-4"}>
                            <B2 color={"#A7A4A9"} weight={400}>
                                Date : {
                                inputValues.date === "" ? "00.00.2023" :
                                    dateFormat(inputValues.date, "dd.mm.yyyy")
                            }
                            </B2>
                            <B2 color={"#A7A4A9"} weight={400}>
                                Time : {
                                Object.keys(selectedSlot).length === 0 ? "00:00am" :
                                    selectedSlot.time
                            }
                            </B2>
                        </div>
                        <B2 color={"#A7A4A9"} weight={400} style={{minHeight: "66px", paddingTop: '18px'}}
                            margin={"0 0 54px 0"}>
                            {
                                Object.keys(selectedStore).length === 0 ? "Address" :
                                    selectedStore.fullAddress
                            }
                        </B2>
                        <S2 color={"#384955"} weight={400}>
                            {
                                productType === "services" ? "Services" : "Products"
                            }
                        </S2>
                        <hr/>
                        {
                            selectedServices.length === 0 ?
                                <S2 color={"#BFBBC2"} weight={400} className={"text-center"}
                                    margin={"54px 0"}>
                                    {
                                        productType === "services" ? "Add Services" : "Add Products"
                                    }
                                </S2> :
                                <>
                                    <div className={"service-list-section"}>
                                        {
                                            selectedServices.map((item, index) => {
                                                return (
                                                    <div className={"service-item my-3"} key={index}>
                                                        <ServiceCard data={item} productType={productType}
                                                                     removeService={removeService}/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
            <>
                {
                    staticModal &&
                    <CustomModal show={staticModal} setShowModal={setStaticModal} toggleModal={toggleShow}>
                        <BookConform toggleModal={toggleShow}/>
                    </CustomModal>
                }

            </>
            <div className={"d-flex justify-content-center mt-5"}>
                <ContainedButton width={"230px"}
                                 padding={"17px"}
                                 onClick={() => submitForm()}
                                 disabled={loading}
                                 fontSize={'16px'}
                >
                    Book Appointment
                </ContainedButton>
            </div>
        </BookAppointmentFormStyle>
    )
}

const ServiceCard = (props) => {
    const {data, productType, removeService} = props;
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    return (
        <ServiceCardContainerStyle className={"d-flex justify-content-between align-items-start"}>
            <div className={"d-flex gap-5"}>
                <div>
                    <S2 weight={500} color={"#5B307C"} className={"mb-2"}>{data.name}</S2>
                    {
                        productType === "products" &&
                        <>
                            <B2 weight={400} color={"#BFBBC2"} className={"mb-2"}>{data.sku}</B2>
                            <B2 weight={400} color={"#5B307C"} className={"mb-2"}>{data.duration}</B2>
                        </>
                    }
                </div>
            </div>
            <MDBIcon far icon="trash-alt" style={{cursor: "pointer"}} size={"lg"} className={"my-3"}
                     onClick={() => removeService(data)}/>
        </ServiceCardContainerStyle>
    )
}
const BookConform = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const router = useRouter()

    return (
        <BookConformStyle>
            <div className={"closebutton"} onClick={props.toggleModal}>
                <Image
                    src={"https://cdn.deepsense.space/nails/assets/images/modelclose.png"}
                    alt={"modelclose"}
                    layout={"fixed"}
                    width={isDesktopOrLaptop ? 52 : 26}
                    height={isDesktopOrLaptop ? 52 : 26}
                />
            </div>
            <div className={"content-box"}>
                <Image
                    src={"https://cdn.deepsense.space/nails/assets/images/booksuccess.png"}
                    alt={"booksuccess"}
                    layout={"fixed"}
                    width={isDesktopOrLaptop ? 72 : 72}
                    height={isDesktopOrLaptop ? 72 : 72}
                />
                <>
                    <H6 weight={500} color={"#5B307C"} className={"mb-2 mt-3"}>Congratulations, your booking has
                        been successfully completed.</H6>
                    <S2 weight={400} color={"#384955"} className={"text-center mb-5"}>{"We can't wait to see you."}</S2>

                    <ContainedButton width={"165px"}
                                     padding={"16px"}
                                     onClick={() => router.push("/")}
                    >
                        Go Home
                    </ContainedButton>
                </>
            </div>
        </BookConformStyle>
    )
}