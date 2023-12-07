import React from "react";
import {AboutUsBannerStyled} from "./AboutUsBanner.styled";
import {useMediaQuery} from "react-responsive";
import Image from "next/image";
import Link from "next/link";
import {ContainedButton} from "../../elements/Button/Button";
import dynamic from "next/dynamic";

const AboutUsBanner = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const {Title, Description, picture, CTAName, CTALink} = props;
    return (
        <AboutUsBannerStyled>
            <div
                className={
                    isDesktopOrLaptop
                        ? " d-flex align-items-center justify-content-center about-us-banner"
                        : "about-us-banner"
                }
            >
                <div className="about-us-contents">
                    <h1 className="about-us-title">
                        {" "}
                        {Title ? Title : "Welcome to Nails’n Beyond!"}
                    </h1>
                    <p className="about-us-description">
                        {Description
                            ? Description
                            : "Your go-to nail artistry destination. We are a full-service salon dedicated to providing our clients with exceptional nail care, personalized attention, and a relaxing atmosphere. Our team of highly skilled and experienced technicians are passionate about their craft and are dedicated to making your nails look and feel amazing. From trendy nail designs to classic looks, we offer a wide range of services to suit every style and occasion."}
                    </p>
                    {isDesktopOrLaptop && (
                        <Link href={CTALink ? CTALink : "/booking"}>
                            <div className="about-us-cta">
                                <ContainedButton padding={"16px 48px"} fontSize={"16px"}
                                                 lineHeight={"22px"}> {CTAName ? CTAName : "Book Appointment"}</ContainedButton>

                            </div>
                        </Link>
                    )}
                </div>
                <div className={isDesktopOrLaptop ? "" : "text-center pt-4"}>
                    <Image
                        src={picture ? picture : "https://cdn.deepsense.space/nails/assets/images/aboutUsImg.webp"}
                        alt={"alt"}
                        width={isDesktopOrLaptop ? 780 : 345}
                        height={isDesktopOrLaptop ? 520 : 230}
                        layout={"intrinsic"}
                        className="about-us-banner-image"
                    />
                    <br></br>
                    {!isDesktopOrLaptop && (
                        <Link href={CTALink ? CTALink : "/booking"}>
                            <div className={"d-flex justify-content-center about-us-cta"}>
                                <ContainedButton padding={"16px 48px"} fontSize={"16px"}
                                                 lineHeight={"22px"}> {CTAName ? CTAName : "Book Appointment"}</ContainedButton>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </AboutUsBannerStyled>
    );
};

// export default AboutUsBanner;
export default dynamic (() => Promise.resolve(AboutUsBanner), {ssr: false})