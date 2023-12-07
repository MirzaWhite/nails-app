import {OurPortfolioContainerStyle, PortfolioCardContainerStyle} from "./OurPortfolio.styled";
import Image from "next/image";
import {B2, H6} from "../../elements/Font/Font.styled";
import {ContainedButton} from "../../elements/Button/Button";
import {useMediaQuery} from "react-responsive";
import Link from "next/link";
import dynamic from "next/dynamic";

const OurPortfolio = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});

    return (
        <OurPortfolioContainerStyle>
            {
                isDesktopOrLaptop &&
                <div className={"large-device-section"}>
                    <div className={"d-flex align-items-center gap-3"}>
                        <div className={"image-item small"}>
                            <Image src={"https://cdn.deepsense.space/nails/assets/images/square1.webp"} alt={""} layout={"fill"}
                                   objectFit={"cover"}
                                   objectPosition={"center"}
                                   priority={false}
                            />
                        </div>
                        <div className={"image-item large"}>
                            <Image src={"https://cdn.deepsense.space/nails/assets/images/rectangle1.webp"} alt={""} layout={"fill"}
                                   objectFit={"cover"}
                                   objectPosition={"center"}
                                   priority={false}
                            />
                        </div>
                        <div className={"our-portfolio"}>
                            <PortfolioCard/>
                        </div>
                    </div>
                    <div className={"d-flex align-items-center gap-3 mt-3"}>
                        <div className={"image-item large"}>
                            <Image src={"https://cdn.deepsense.space/nails/assets/images/rectangle2.webp"} alt={""} layout={"fill"}
                                   objectFit={"cover"}
                                   objectPosition={"center"}
                                   priority={false}
                            />
                        </div>
                        <div className={"image-item small"}>
                            <Image src={"https://cdn.deepsense.space/nails/assets/images/square2.webp"} alt={""} layout={"fill"}
                                   objectFit={"cover"}
                                   objectPosition={"center"}
                                   priority={false}
                            />
                        </div>
                        <div className={"image-item large"}>
                            <Image src={"https://cdn.deepsense.space/nails/assets/images/rectangle3.webp"} alt={""} layout={"fill"}
                                   objectFit={"cover"}
                                   objectPosition={"center"}
                                   priority={false}
                            />
                        </div>
                        <div className={"image-item small"}>
                            <Image src={"https://cdn.deepsense.space/nails/assets/images/square3.webp"} alt={""} layout={"fill"}
                                   objectFit={"cover"}
                                   objectPosition={"center"}
                                   priority={false}
                            />
                        </div>
                    </div>
                </div>
            }
            {
                !isDesktopOrLaptop &&
                <div className={"small-device-section"}>
                    <div className={"row"}>
                        <div className={"col-4 d-flex align-items-center justify-content-center"}>
                            <div className={"image-item small"}>
                                <Image src={"https://cdn.deepsense.space/nails/assets/images/square1.webp"} alt={""} layout={"fill"}
                                       objectFit={"cover"}
                                       objectPosition={"center"}
                                       priority={false}
                                />
                            </div>
                        </div>
                        <div className={"col-4 d-flex align-items-center justify-content-center"}>
                            <div className={"image-item small"}>
                                <Image src={"https://cdn.deepsense.space/nails/assets/images/square2.webp"} alt={""} layout={"fill"}
                                       objectFit={"cover"}
                                       objectPosition={"center"}
                                       priority={false}
                                />
                            </div>
                        </div>
                        <div className={"col-4 d-flex align-items-center justify-content-center"}>
                            <div className={"image-item small"}>
                                <Image src={"https://cdn.deepsense.space/nails/assets/images/square3.webp"} alt={""} layout={"fill"}
                                       objectFit={"cover"}
                                       objectPosition={"center"}
                                       priority={false}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"row mt-3"}>
                        <div className={"col-12"}>
                            <PortfolioCard/>
                        </div>
                    </div>
                    <div className={"row mt-3"}>
                        <div className={"col-4"}>
                            <div className={"image-item small"}>
                                <Image src={"https://cdn.deepsense.space/nails/assets/images/rectangle1.webp"} alt={""} layout={"fill"}
                                       objectFit={"cover"}
                                       objectPosition={"center"}
                                       priority={false}
                                />
                            </div>
                        </div>
                        <div className={"col-8"}>
                            <div className={"image-item large"}>
                                <Image src={"https://cdn.deepsense.space/nails/assets/images/rectangle2.webp"} alt={""} layout={"fill"}
                                       objectFit={"cover"}
                                       objectPosition={"center"}
                                       priority={false}
                                />
                            </div>
                        </div>
                    </div>
                    {
                        !isDesktopOrLaptop &&
                        <div className={"d-flex justify-content-center mt-4"}>
                            <ContainedButton padding={"16px 31px"} fontSize={"16px"} lineHeight={"22px"}>View
                                Gallery</ContainedButton>
                        </div>
                    }
                </div>
            }
        </OurPortfolioContainerStyle>
    )
}

// export default OurPortfolio;
export default dynamic(() => Promise.resolve(OurPortfolio), {ssr: false})


const PortfolioCard = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    return (
        <PortfolioCardContainerStyle className={"d-flex flex-column justify-content-center align-items-center"}>
            <H6 weight={600} className={"title text-center"}>Our Portfolio</H6>
            <B2 weight={400} className={"description text-center"} color={"#384955"}>
                Take a look at some of our best works
            </B2>
            {
                isDesktopOrLaptop &&
                <Link href={"/gallery"}>
                    <ContainedButton padding={"16px 48px"} fontSize={"16px"} lineHeight={"22px"}>View
                        Gallery</ContainedButton>
                </Link>
            }
        </PortfolioCardContainerStyle>
    )
}