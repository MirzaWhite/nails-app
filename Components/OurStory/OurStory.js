import React from "react";
import {OurStoryStyled} from "./OurStory.styled";
import Image from "next/image";
import {useMediaQuery} from "react-responsive";
import Link from "next/link";
import {ContainedButton} from "../../elements/Button/Button";
import dynamic from "next/dynamic";

const OurStory = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});

    return (
        <OurStoryStyled>
            <div
                className={
                    isDesktopOrLaptop
                        ? " d-flex align-items-center justify-content-center our-story-banner"
                        : "our-story-banner "
                }
            >
                <div
                    className={
                        isDesktopOrLaptop
                            ? " our-story-contents order-2"
                            : "our-story-contents"
                    }
                >
                    <h1 className="our-story-title">Our Story</h1>
                    <p className="our-story-description">
                        At Nails&apos;n Beyond, we have a passion for creativity and beauty. Our
                        journey in the nail care industry began with the desire to provide a
                        unique and exceptional experience for our clients.
                    </p>
                    <p className="our-story-description pt-3">
                        Our vision was to create a nail art studio that offers high-quality
                        services with personalized attention, where clients can indulge in
                        some well-deserved self-care and leave feeling confident and
                        beautiful. We started small, but with a lot of passion and hard
                        work, we have grown into one of the most popular nail salons in the
                        industry.
                    </p>
                    <p className="our-story-description pt-3">
                        Over the years, we have developed a team of highly skilled and
                        experienced nail technicians, who are passionate about delivering
                        the best possible service. We use only the highest quality products
                        and adhere to strict sanitation protocols to ensure that our clients
                        receive a safe and comfortable experience!
                    </p>
                    {isDesktopOrLaptop && (
                        <Link href={"/gallery"}>
                            <div className={"our-story-cta"}>
                                <ContainedButton padding={"16px 48px"} fontSize={"16px"} lineHeight={"22px"}>View Gallery</ContainedButton>
                            </div>

                        </Link>
                    )}
                </div>
                <div className={isDesktopOrLaptop ? " order-1" : "text-center pt-4"}>
                    <Image
                        src={isDesktopOrLaptop ? "https://cdn.deepsense.space/nails/assets/images/Our_storyD.webp" : "https://cdn.deepsense.space/nails/assets/images/Our_storyM.webp"}
                        alt={"alt"}
                        width={isDesktopOrLaptop ? 500 : 330}
                        height={isDesktopOrLaptop ? 451 : 330}
                        layout={"intrinsic"}
                        className="our-story-image"
                    />
                    <br></br>
                    {!isDesktopOrLaptop && (
                        <Link href={"/gallery"}>
                            {/*<button className="our-story-cta">View Gallery</button>*/}

                            <div className={"d-flex justify-content-center our-story-cta"}>
                                <ContainedButton padding={"16px 48px"} fontSize={"16px"} lineHeight={"22px"}>View Gallery</ContainedButton>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </OurStoryStyled>
    );
};

// export default OurStory;
export default dynamic (() => Promise.resolve(OurStory), {ssr: false})
