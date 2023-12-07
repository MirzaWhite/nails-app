import React from "react";
import {useMediaQuery} from "react-responsive";
import {FranchiseStyled} from "./Franchise.styled";
import {B2, H6} from "../../elements/Font/Font.styled";
import Image from "next/image";
import {ContainedButton} from "../../elements/Button/Button";
import Link from "next/link";
import dynamic from "next/dynamic";


const Franchise = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1270});

    return (
        <FranchiseStyled>
            <div className={isDesktopOrLaptop ? "d-flex" : ""}>
                <div className={'franchise-content'}>
                    <B2 className={'franchise-title'}>Franchise </B2>
                    <H6 className={'franchise-subtitle'}>Be Part of Our Franchise Network!</H6>
                    <B2 className={'franchise-description'}>Join our network of highly successful salons to provide the
                        best, high-quality
                        nail artistry services to customers across the city</B2>
                    {
                        isDesktopOrLaptop &&

                        <div className={"pt-3"}>
                            <Link href={'/franchise'}>
                                <ContainedButton width={"171px"} active_bg_color={"#5B307C"}
                                                 padding={"16px 48px"}
                                                 fontSize={'16px'}
                                >Read More</ContainedButton>
                            </Link>
                        </div>

                    }
                </div>
                <div className={"image-section"}>
                    {
                        isDesktopOrLaptop ? <Image alt={'alt'}
                                                   src={"https://cdn.deepsense.space/nails/assets/images/nailFranchise.png"}
                                                   width={658}
                                                   height={369}
                                                   className={'franchise-image'}
                                                   priority={false}

                        ></Image> : <div className={'text-center'}>
                            <Image alt={'alt'}
                                   src={"https://cdn.deepsense.space/nails/assets/images/franchisem.webp"}
                                   width={330}
                                   height={190}
                                   className={'franchise-image'}
                                   priority={false}
                            ></Image>
                        </div>
                    }
                </div>

                {
                    !isDesktopOrLaptop &&
                    <div className={"read-more-btn d-flex justify-content-center"}>
                        <Link href={'/franchise'}>
                            <ContainedButton width={"171px"} active_bg_color={"#5B307C"}
                                             padding={"16px 48"} fontSize={'16px'}
                            >Read More</ContainedButton>
                        </Link>
                    </div>
                }
            </div>
        </FranchiseStyled>
    )
}

// export default Franchise;
export default dynamic(() => Promise.resolve(Franchise), {ssr: false})
