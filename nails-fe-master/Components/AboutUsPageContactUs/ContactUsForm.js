import React, {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {B1, B2, H6} from "../../elements/Font/Font.styled";
import {ContactUsFormtStyle} from "./ContactUsForm.styled"
import Image from "next/image";
import {ContainedButton} from "../../elements/Button/Button";
import {SelectServicesStyle} from "../BookAppointment/index.style";
import {MDBCollapse} from "mdb-react-ui-kit";
import {useLazyQuery, useMutation} from "@apollo/client";
import {GET_STORES_QUERY} from "../../Apollo/query/GetLocateUsQuery";
import CREATE_FRANCHISE_MUTATION from "../../Apollo/mutation/FranchiseMutation";
import {toast} from "react-toastify";
import dynamic from "next/dynamic";

const ContactUsForm = () => {
    const isDesktopOrLaptop = useMediaQuery({query: "(min-width:1224px)",});
    const [selectedPositionIsVisible, setSelectedPositionIsVisible] = useState(false);
    const [locateUsData, setLocateUsData] = useState('')
    const [typeData, setTypeData] = useState('')
    const [selectedData, setSelectedData] = useState('');
    const [name, setName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({});
    const [getLocateUsData] = useLazyQuery(GET_STORES_QUERY)
    const [contactUsFormMutation] = useMutation(CREATE_FRANCHISE_MUTATION);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        LocateUsDataApi()
        return () => {
        }
    }, [typeData]);

    const LocateUsDataApi = async () => {
        try {
            await getLocateUsData({variables: {fullAddress_Icontains: typeData.length > 0 ? typeData : "N"}}).then(({data}) => {
                setLocateUsData(data.stores.edges)
            });
        } catch (error) {
            console.log(error)
        }
    }


    const handleOnChangeService = (data) => {
        setSelectedPositionIsVisible(false)
        setSelectedData(data)
        setTypeData("")
    }
    const typeDataFromInput = (e) => {
        if (e.target.value !== "") {
            setSelectedPositionIsVisible(true)
            setTypeData(e.target.value)
        } else {
            setSelectedPositionIsVisible(false)
            setTypeData("")
        }
    }


    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleMobileNoChange = (e) => {
        setMobileNo(e.target.validity.valid ? e.target.value : mobileNo);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };


    const handleSubmit = async () => {
            let tmp_error = {};
            if (name === "") {
                tmp_error = {
                    name: "Please enter your name",
                };
                setError(tmp_error);

            } else if (mobileNo === "") {
                tmp_error = {
                    mobileNo: "Please enter your mobile number",
                };
                setError(tmp_error);

            } else if (mobileNo.length > 10 || mobileNo.length < 10) {
                tmp_error = {
                    mobileNo: "Please enter valid mobile number",
                };
                setError(tmp_error);
            } else if (message === "") {
                tmp_error = {
                    message: "Please enter your Message",
                };
                setError(tmp_error);
            } else {
                let variable = {
                    phoneNumber: mobileNo,
                    message: message,
                    name: name,
                    formType: "NORMAL",
                }
                try {
                    setLoading(true);
                    const data = await contactUsFormMutation({
                        variables: variable,
                    });

                    if (data?.data?.contactUs) {
                        setLoading(false);
                        toast.success(data?.data?.contactUs?.message, {
                            position: toast.POSITION.TOP_CENTER
                        });
                        setError({});
                        setName("");
                        setMobileNo("");
                        setMessage("");
                    }
                } catch (error) {
                    setLoading(false);
                    console.log(error);
                }
            }
        }
    ;


    const RedirectToMap = () => {
        if (selectedData?.coordinate?.length > 1) {
            window.open(selectedData.coordinate, '_blank');

        } else if (locateUsData[0]?.node?.coordinate?.length > 1) {
            debugger
            window.open(locateUsData[0].node.coordinate, '_blank');
        }
    }


    return (

        <ContactUsFormtStyle>
            <div id={"contactform"} className={"about-us-contact"}>
                <div className={"form-section"}>
                    <div className={'locate-us'}>
                        <H6 color={"#5B307C"} weight={500} className={"title"}>Locate Us</H6>
                        <p style="text-align: center; color: #384955; font-weight: 400;">GROOM INDIA SALON & SPA PRIVATE LIMITED</p>
                        <SelectServicesStyle>
                            <div className={'select-our-services'}>


                                <div>
                                    <input
                                        value={typeData}
                                        type="text" name="fname" placeholder="Search Your Store"
                                        onChange={(event) => typeDataFromInput(event)}
                                        className={'search-address'}/>
                                </div>

                                <MDBCollapse show={selectedPositionIsVisible}
                                             className={"overflow-auto opints-to-select"}>
                                    {locateUsData.length > 0 ?
                                        locateUsData.map((item, index) => {
                                            return (
                                                <div key={index}
                                                     className={"d-flex justify-content-between single-service"}
                                                     onClick={() => handleOnChangeService(item.node)}>
                                                    <B1 className={"d-flex align-items-center py-2"} key={index}
                                                        color={"#BFBBC2"}>
                                                        {item.node.fullAddress
                                                        }
                                                    </B1>

                                                </div>
                                            )
                                        }) : <B1 className={"d-flex align-items-center justify-content-center no-store"}
                                                 color={"#BFBBC2"}>
                                            No store available.
                                        </B1>
                                    }
                                </MDBCollapse>
                            </div>
                        </SelectServicesStyle>


                        <div className={'contact-detail-part mt-4'}>
                            <div className={'d-flex contacts'}>
                                <div style={{width: isDesktopOrLaptop ? '52px' : '32px'}}>
                                    <Image src={"https://cdn.deepsense.space/nails/assets/images/location.png"}
                                           alt={'alt'} width={isDesktopOrLaptop ? 24 : 16}
                                           height={isDesktopOrLaptop ? 30 : 20} priority={false}/>
                                </div>
                                <B2 className={'address-part'}>
                                    {
                                        selectedData?.fullAddress ? selectedData?.fullAddress : locateUsData[0]?.node.fullAddress
                                    }
                                </B2>
                            </div>
                            {selectedData?.phoneNumber?.length > 0 &&
                                <div className={'d-flex contacts'}>
                                    <div>
                                        <Image src={"https://cdn.deepsense.space/nails/assets/images/phone.png"}
                                               alt={'alt'} width={isDesktopOrLaptop ? 24 : 16}
                                               height={isDesktopOrLaptop ? 24 : 16} priority={false}/>
                                    </div>
                                    <B2 className={'address-part'}> {selectedData?.phoneNumber ? selectedData?.phoneNumber : locateUsData[0]?.node.phoneNumber}</B2>
                                </div>
                            }
                            {selectedData?.email?.length > 0 &&
                                <div className={'d-flex contacts'}>
                                    <div>
                                        <Image src={"https://cdn.deepsense.space/nails/assets/images/message.png"}
                                               alt={'alt'} width={isDesktopOrLaptop ? 28 : 18}
                                               height={isDesktopOrLaptop ? 22 : 14} priority={false}/>
                                    </div>
                                    <B2 className={'address-part'}>{selectedData?.email ? selectedData?.email : locateUsData[0]?.node.email}</B2>
                                </div>
                            }
                            <B2 onClick={() => RedirectToMap()} className={'text-center view-map'}>View on Map</B2>

                        </div>
                    </div>
                    <div className={isDesktopOrLaptop ? 'contact-us' : 'contact-us pt-3'}>
                        <H6 color={"#5B307C"} weight={500} className={"title"}>Contact Us</H6>
                        <input className={'form-values'} type="text" name="fname" placeholder="Name" value={name}
                               onChange={(e) => handleNameChange(e)}/>
                        {error.name && <p className="text-danger mb-2 mt-0">{error.name}</p>}
                        <input className={'form-values'}
                               type="text" name="Phone Number" placeholder="Phone Number"
                               value={mobileNo}
                               pattern="[0-9]*"
                               maxLength="10"
                               onInput={(e) => handleMobileNoChange(e)}
                               onChange={(e) => handleMobileNoChange(e)}
                        />
                        {error.mobileNo && <p className="text-danger mb-2 mt-0">{error.mobileNo}</p>}
                        <textarea className={"message"} name="Message" placeholder="Message"
                                  rows="4"
                                  cols="50"
                                  value={message}
                                  onChange={(e) => handleMessageChange(e)}/>
                        {error.message && <p className="text-danger mb-2 mt-0">{error.message}</p>}
                        {
                            isDesktopOrLaptop && <div className={"submit Roboto"}>
                                <ContainedButton width={"151px"} active_bg_color={"#5B307C"}
                                                 padding={"16px 48px"}
                                                 onClick={handleSubmit}
                                                 fontSize={"16px"}
                                                 disabled={loading}
                                >Submit</ContainedButton>
                            </div>
                        }

                    </div>
                </div>
                {
                    !isDesktopOrLaptop && <div className={"submit pt-3"}>
                        <ContainedButton width={"151px"} active_bg_color={"#5B307C"}
                                         padding={"16px"}
                                         onClick={handleSubmit}
                                         disabled={loading}
                                         fontSize={"16px"}
                        >Submit</ContainedButton>
                    </div>
                }
            </div>
        </ContactUsFormtStyle>

    )
}
export default dynamic(() => Promise.resolve(ContactUsForm), {ssr: false})

// export default ContactUsForm;