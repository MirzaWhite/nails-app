
import {BookConformStyle} from "./styled"
import {B2, H6, S2, B1} from "../../elements/Font/Font.styled";
import {ContainedButton} from "../../elements/Button/Button";
import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import Image from "next/image";
import {useRouter} from "next/router";

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


