import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {H6} from "../../elements/Font/Font.styled";
import {ContainedButton} from "../../elements/Button/Button";
import GET_State from "../../Apollo/query/GetStateQuery";
import {useLazyQuery, useMutation} from "@apollo/client";
import GET_City from "../../Apollo/query/GetCityQuery";
import CREATE_FRANCHISE_MUTATION from "../../Apollo/mutation/FranchiseMutation";
import dynamic from "next/dynamic";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FranchiseContact = () => {
    const [error, setError] = useState({});
    const [statedata, setStateData] = useState([]);
    const [citydata, setCitydata] = useState([]);
    const [getCityData] = useLazyQuery(GET_City);
    const [getFunData] = useLazyQuery(GET_State);
    const [Submitfrom] = useMutation(CREATE_FRANCHISE_MUTATION);

    const [inputValues, setInputValue] = useState({
        FirstName: "",
        MobileNo: "",
        EmailID: "",
        State: "",
        City: "",
        Message: ""
    });
    const [isCityError, setCityError] = useState(false)


    useEffect(() => {
        ApiStatecalling()
        return () => {

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeHandler = (event) => {

        const {name, value} = event.target;
        if (name === "State") {
            ApiCityCalling(value)
        }
        if (name === "MobileNo") {
            if (isNaN(value)) {
                return false;
            }
        }
        setInputValue({...inputValues, [name]: value});
    }

    const onClickHandler = () => {
        if (inputValues.State === "") {
            setCityError(true)
            toast.warning("Please select the state", {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            setCityError(false)
        }
    }


    const FormSubmit = () => {

        const emailCond = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (inputValues.FirstName.trim() === "") {

            setError({
                ...error,
                FirstName: "Please enter your name",
                MobileNo: "",
                EmailID: "",
                State: "",
                City: "",
                Message: ""
            })
        } else if (inputValues.MobileNo.trim() === "") {

            setError({
                ...error,
                FirstName: "",
                MobileNo: "Please enter your mobile number",
                EmailID: "",
                State: "",
                City: "",
                Message: ""
            })
        } else if (inputValues.MobileNo.length !== 10) {

            setError({
                ...error,
                FirstName: "",
                MobileNo: "Please enter valid mobile number",
                EmailID: "",
                State: "",
                City: "",
                Message: ""
            })
        } else if (inputValues.EmailID.trim() === "") {

            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "Please enter your Emailid",
                State: "",
                City: "",
                Message: ""
            })
        } else if (inputValues.EmailID.match(emailCond) === null) {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "Please enter valid Emailid",
                State: "",
                City: "",
                Message: ""
            })
        } else if (inputValues.State.trim() === "") {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "",
                State: "Please select your state",
                City: "",
                Message: ""
            })
        } else if (inputValues.City.trim() === "") {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "",
                State: "",
                City: "Please select your city",
                Message: ""
            })
        } else if (inputValues.Message.trim() === "") {
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "",
                State: "",
                City: "",
                Message: "Please enter your Message"
            })
        } else {
            Submit()
            setError({
                ...error,
                FirstName: "",
                MobileNo: "",
                EmailID: "",
                State: "",
                City: "",
                Message: ""
            });
        }
    }

    const ApiStatecalling = () => {
        try {
            getFunData().then(({data, errors}) => {
                if (data) {
                    setStateData(data.states)
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    function ApiCityCalling(id) {
        console.log(inputValues.City)
        try {
            getCityData({variables: {stateId: id}}).then(({data, errors}) => {
                if (data) {
                    setCitydata(data.citiesByState)
                    if (inputValues.City !== "") {
                        setInputValue(prevState => ({
                            ...prevState,
                            City: (data.citiesByState[0].id)
                        }));

                    }
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    const Submit = async () => {
        try {
            const {data, errors} = await Submitfrom({
                variables: {
                    cityId: inputValues.City,
                    email: inputValues.EmailID,
                    formType: "FRANCHISE",
                    message: inputValues.Message,
                    name: inputValues.FirstName,
                    phoneNumber: inputValues.MobileNo,
                    stateId: inputValues.State
                }
            })
            console.log(data.contactUs.message)
            if (data.contactUs.message.includes("Submitted")) {
                setInputValue({
                    FirstName: "",
                    MobileNo: "",
                    EmailID: "",
                    State: "",
                    City: "",
                    Message: ""
                })
                toast.success("successfully", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <FranchiseContactStyle>
                <div id={"franchiseForm"} className={"FranchiseContact"}>
                    <H6 color={"#5B307C"} weight={500} className={"title"}>Contact Us</H6>
                    <div className={"form-section"}>
                        <div>
                            <input type="text" name="FirstName" placeholder="Name" value={inputValues.FirstName}
                                   onChange={onChangeHandler}/>
                            {
                                error?.FirstName && <p className="text-danger mb-2 mt-0">{error.FirstName}</p>
                            }
                            <input type="text" name="MobileNo" pattern="[0-9]*" maxLength="10"
                                   placeholder="Phone Number"
                                   value={inputValues.MobileNo}
                                   onChange={onChangeHandler}/>
                            {
                                error?.MobileNo && <p className="text-danger mb-2 mt-0">{error.MobileNo}</p>
                            }
                            <input type="text" name="EmailID" placeholder="Email Address" value={inputValues.EmailID}
                                   onChange={onChangeHandler}/>
                            {
                                error?.EmailID && <p className="text-danger mb-2 mt-0">{error.EmailID}</p>
                            }
                        </div>
                        <div>
                            <select className={'select-drop-down'} type="text" value={inputValues.State}
                                    name="State" onChange={onChangeHandler}>
                                <option value="" className={'select-option'} disabled selected hidden>Select State
                                </option>
                                {
                                    statedata.map((data, index) => (
                                        <option className={'select-option'} key={index}
                                                value={data.id}>{data.name}</option>
                                    ))
                                }
                            </select>
                            {
                                error?.State && <p className="text-danger mb-2 mt-0">{error.State}</p>
                            }
                            <select className={'select-drop-down'} type="text" value={inputValues.City}
                                    name="City" onClick={() => onClickHandler()} onChange={onChangeHandler}>
                                <option value="" className={'select-option'} disabled selected hidden>Select City
                                </option>
                                {isCityError &&
                                    <option value="" className={'select-option'}>Please select the state</option>}
                                {
                                    citydata?.map((data, index) => (
                                        <option className={'select-option'} key={index}
                                                value={data.id}>{data.name}</option>
                                    ))
                                }
                            </select>
                            {
                                error?.City && <p className="text-danger mb-2 mt-0">{error.City}</p>
                            }
                            <textarea className={"message"} name="Message" value={inputValues.Message}
                                      placeholder="Message" onChange={onChangeHandler}/>
                            {
                                error?.Message && <p className="text-danger mb-2 mt-0">{error.Message}</p>
                            }
                        </div>
                    </div>
                    <div className={"submit"}>
                        <ContainedButton width={"151px"} active_bg_color={"#5B307C"}
                                         padding={"16px"}
                                         fontSize={'16px'}
                                         onClick={() => FormSubmit()}>Submit</ContainedButton>
                    </div>
                </div>
            </FranchiseContactStyle>
        </>
    )
}
// export default FranchiseContact;
export default dynamic(() => Promise.resolve(FranchiseContact), {ssr: false})


const FranchiseContactStyle = styled.div`
  margin: 20px 0;
  padding: 24px;
  @media (min-width: 1224px) {
    padding: 0;
  }

  .FranchiseContact {
    padding: 16px;
    background: #EFEAF2;
    border-radius: 20px;
    @media (min-width: 1224px) {
      padding: 40px 0;
      width: 90%;
      margin: 0 auto;
    }
  }

  .title {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 20px;
    text-align: -webkit-center;
    @media (min-width: 1224px) {
      margin-bottom: 40px;
      background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  input, select, textarea {
    background: #FFFFFF;
    padding: 10px;
    box-shadow: 0 8px 16px #D1C6DB;
    border-radius: 8px;
    border: none;
    width: 100%;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    color: #BFBBC2;
    margin-bottom: 30px;
    @media (min-width: 1224px) {
      background: #FFFFFF;
      box-shadow: 0 8px 16px #D1C6DB;
      border-radius: 16px;
      padding: 17px;
      font-family: 'Jost', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 27px;
      color: #A9A8AD;
      margin-bottom: 24px;
    }
  }

  .select-drop-down {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url(${"https://cdn.deepsense.space/nails/assets/images/dropdown-arrow.png"}) !important;
    background-repeat: no-repeat !important;
    background-position-x: 95% !important;
    background-position-y: 23px !important;
    margin-right: 2rem;
    color: #A9A8AD;
    padding: 15px 10px;
    @media (max-width: 1224px) {
      background-position-y: 13px !important;
    }
  }

  .select-option {
    color: #A9A8AD
  }

  .message {
    height: 80px !important;
    @media (min-width: 1224px) {
      height: 110px !important;
    }
  }

  input, select, textarea:focus {
    outline: none;
  }

  ::placeholder {
    color: #A9A8AD !important;
  }

  .submit {
    text-align: -webkit-center;
    @media (min-width: 1224px) {
      margin-top: 20px;
    }
  }

  .form-section {
    @media (min-width: 1224px) {
      width: 87%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      gap: 10%;
    }
  }
`