import {AboutUsShortContainerStyled} from "./AboutUsShort.styled";
import Image from "next/image";
import {B2, S1} from "../../elements/Font/Font.styled";
import {ContainedButton} from "../../elements/Button/Button";
import {useMediaQuery} from "react-responsive";
import Link from "next/link";
import dynamic from "next/dynamic";

const AboutUsShort = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});

    return (
        <AboutUsShortContainerStyled>
            <div className={"row"}>
                <div className={"col-sm-4 order-2 order-sm-1"}>
                    <div className={"masonary-container d-flex"}>
                        <div className={"left-section d-flex flex-column"}>
                            <div className={"large-part"}>
                                <Image src={"https://cdn.deepsense.space/nails/assets/images/About-section1.webp"} alt={""} layout={"fill"} objectFit={"cover"}
                                       objectPosition={"center"} priority={false}/>
                            </div>
                            <div className={"small-part"}>
                            </div>
                        </div>
                        <div className={"right-section d-flex flex-column"}>
                            <div className={"small-part"}>
                            </div>
                            <div className={"large-part"}>
                                <Image src={"https://cdn.deepsense.space/nails/assets/images/About-section2.webp"} alt={""} layout={"fill"} objectFit={"cover"}
                                       objectPosition={"center"} priority={false}/>
                            </div>
                        </div>
                    </div>
                    {
                        !isDesktopOrLaptop &&
                        <div className={"d-flex justify-content-center mt-4"}>
                            <Link href={"/about-us"}>
                                <ContainedButton padding={"16px 48px"} fontSize={"16px"} lineHeight={"22px"}>Know
                                    More</ContainedButton>
                            </Link>
                        </div>
                    }
                </div>
                <div className={"col-sm-8 order-1 order-sm-2"}>
                    <div className={"h-100 d-flex align-items-center"}>
                        <div className={"about-details-section"}>
                            <B2 weight={400} color={"#384955"} className={"section-title mb-0"}>About Us</B2>
                            <div className={"content-section"}>
                                <S1 weight={500} className={"title"}>Discover the passion behind our artistic nail
                                    designs!</S1>
                                <B2 weight={400} color={"#384955"} className={"description mb-0"}>
                                    Nails’n Beyond was founded by a team of experienced nail artists
                                    who saw the need for high-quality, affordable nail artistry services
                                </B2>
                            </div>
                            {
                                isDesktopOrLaptop &&
                                <Link href={"/about-us"}>
                                    <ContainedButton padding={"16px 48px"} fontSize={"16px"} lineHeight={"22px"}>Know
                                        More</ContainedButton>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AboutUsShortContainerStyled>
    )
}
// export default AboutUsShort;
export default dynamic(() => Promise.resolve(AboutUsShort), {ssr: false})

