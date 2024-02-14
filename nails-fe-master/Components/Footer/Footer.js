import React, {useState} from "react";
import {FooterStyled} from "./Footer.styled";
import Image from "next/image";
import {useMediaQuery} from "react-responsive";
import {B2, S2} from "../../elements/Font/Font.styled";
import {ContainedButton} from "../../elements/Button/Button";
import CREATE_SUBSCRIBE_MUTATION from "../../Apollo/mutation/SubscribeMutation";
import {useMutation} from "@apollo/client";
import Link from 'next/link'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/router";


const Footer = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});

    const [Subscribe] = useMutation(CREATE_SUBSCRIBE_MUTATION);
    const router = useRouter()
    const [emailId, setEmailid] = useState("");
    const [error, setError] = useState("");


    const VerifyEmail = async () => {
        try {
            const {data, errors} = await Subscribe({
                variables: {email: emailId},
            });
            if (data.subscribe.message.includes("already")) {
                setEmailid("")
                toast.success("alredy subscribed", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            if (data.subscribe.message.includes("successfully")) {
                setEmailid("")
                toast.success("successfully", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            console.log(data.subscribe.message)
        } catch (error) {
            console.log(error);
        }
    };

    function EmailValidation() {
        setError("");
        const emailCond =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailId.trim() === "" || emailId.match(emailCond) === null) {
            setError("Please Enter Valid EmailId");
            return false;
        } else {
            setError("");
            VerifyEmail()
        }
    }


    return (
        <FooterStyled>
            <div className={"footer"}>
                <div className={isDesktopOrLaptop ? "d-none" : "subscribe-section"}>
                    <div className={"subscribe-box"}>
                        <S2 color={'#5B307C'} weight={500} className={'text-center mb-3 title'}>Subscribe For
                            Newsletter</S2>
                        <div className={"input-field"}>
                            <input placeholder={"Email Address"} type="text" name="Email" value={emailId}
                                   onChange={(e) => setEmailid(e.target.value)}/>
                            <div className={"child"}>
                                <ContainedButton width={"100px"} fontSize={'16px'} padding={"13px"}
                                                 onClick={() => EmailValidation()}>
                                    Subscribe
                                </ContainedButton>
                            </div>
                        </div>
                        {
                            error && <h6 style={{
                                color: "red",
                                marginBottom: "5px",
                                marginTop: "8px",
                            }}>{error}</h6>
                        }
                        <B2 color={'#384955'} weight={500} className={'mt-1'}>By signing and clicking Submit,
                            you affirm that you have read and
                            agree to the Privacy Policy and Terms of Use.
                            and want to receive news. </B2>
                    </div>
                </div>
                <div className={"footer-section"}>
                    <div className={"ds-footer-area"}>
                        <div className={"ds-links"}>
                            <div className={"links-section"}>
                                <Image
                                    src={"https://cdn.deepsense.space/nails/assets/images/newmainlogo.png"}
                                    alt={"footerlogo1"}
                                    layout={"fixed"}
                                    width={isDesktopOrLaptop ? 155 : 94}
                                    height={isDesktopOrLaptop ? 105 : 64}
                                    onClick={() => router.push("/")}
                                />
                                <div className={"social-links"}>
                                    <div>
                                        <a href={'https://www.facebook.com/nailsnbeyondindia'} target={"_blank"}
                                           rel="noreferrer">
                                            <Image
                                                src={"https://cdn.deepsense.space/nails/assets/images/facebook.png"}
                                                alt={"facebook"}
                                                layout={"fixed"}
                                                width={isDesktopOrLaptop ? 55 : 35}
                                                height={isDesktopOrLaptop ? 55 : 35}
                                            />
                                        </a>
                                    </div>
                                    <div>
                                        <a href={'https://www.instagram.com/nails.n.beyond/'} target={"_blank"}
                                           rel="noreferrer">
                                            <Image
                                                src={"https://cdn.deepsense.space/nails/assets/images/insta.png"}
                                                alt={"insta"}
                                                layout={"fixed"}
                                                width={isDesktopOrLaptop ? 55 : 35}
                                                height={isDesktopOrLaptop ? 55 : 35}
                                            />
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className={"site-links"}>
                                <div className={"head"}>
                                    <S2 weight={500}>Site Links</S2>
                                </div>
                                <div className={"link-text"}>
                                    <Link href="/about-us">
                                        <B2 color={'#384955'} weight={500}>About Us</B2>
                                    </Link>
                                    <Link href="/products">
                                        <B2 color={'#384955'} weight={500}>Services</B2>
                                    </Link>
                                    <Link href="/gallery">
                                        <B2 color={'#384955'} weight={500}>Gallery</B2>
                                    </Link>
                                    {
                                        isDesktopOrLaptop && <Link href="/blogs">
                                            <B2 color={'#384955'} weight={500}>Blogs</B2>
                                        </Link>
                                    }
                                    <Link href="/contact-us">
                                        <B2 color={'#384955'} weight={500}>Contact Us</B2>
                                    </Link>
                                    <Link href="/booking">
                                        <B2 className={!isDesktopOrLaptop ? "d-none" : ""} color={'#384955'}
                                            weight={500}>Book Appointment</B2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={isDesktopOrLaptop ? "DS-subscribe" : "d-none"}>
                            <div className={"DSsubscribe-box2"}>
                                <S2 color={'#5B307C'} weight={500} className={'text-center mb-3 title'}>Subscribe For
                                    Newsletter</S2>
                                <div className={"input-field"}>
                                    <input placeholder={"Email Address"} type="text" name="Email" value={emailId}
                                           onChange={(e) => setEmailid(e.target.value)}/>
                                    <div className={"child"} onClick={() => EmailValidation()}>
                                        <ContainedButton width={"140px"} fontSize={'16px'} padding={"18px 32px"}>
                                            Subscribe
                                        </ContainedButton>
                                    </div>
                                </div>
                                {
                                    error && <h6 style={{
                                        color: "red",
                                        marginBottom: "5px",
                                        marginTop: "8px",
                                    }}>{error}</h6>
                                }
                                <B2 color={'#384955'} weight={500} className={'ds-para mt-1'}>By signing and clicking
                                    Submit,
                                    you affirm that you have read and
                                    agree to the Privacy Policy and Terms of Use.
                                    and want to receive news. </B2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"reserved"}>
                    <B2 className={isDesktopOrLaptop ? "d-none" : ""} color={'#384955'} weight={400}>2023
                    GROOM INDIA SALON & SPA PRIVATE LIMITED</B2>
                    <div className={"ds-reserve"}>
                        <B2 color={'#384955'} weight={400}>GROOM INDIA SALON & SPA PRIVATE LIMITED</B2>
                        <B2 color={'#384955'} weight={400} onClick={() => router.push("./privacy-policy")}
                            className={"privacy"}>Privacy Policy | Terms & Conditions</B2>
                    </div>
                </div>
            </div>
        </FooterStyled>
    );
};

export default Footer;