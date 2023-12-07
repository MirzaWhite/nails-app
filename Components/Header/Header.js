import React, {useState} from "react";
import {HeaderStyled} from "./Header.styled";
import Image from "next/image";
import {useMediaQuery} from "react-responsive";
import {B2, S1} from "../../elements/Font/Font.styled";
import {useRouter} from "next/router";

const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const [show, setShow] = useState(false);
    const router = useRouter()


    const ChangeValue = (url) => {
        if (url) {
            router.push(url)
        }
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }


    return (
        <HeaderStyled>
            <div className={show ? "Header1" : "Header"}>
                <div className={"heading"}>
                    <div className={"logo-section"} onClick={() => router.push("/")}>
                        <Image
                            src={"https://cdn.deepsense.space/nails/assets/images/newmainlogo.png"}
                            alt={"main-logo"}
                            layout={"fixed"}
                            width={isDesktopOrLaptop ? 100 : 67}
                            height={isDesktopOrLaptop ? 58 : 40}
                        />
                    </div>
                    <div className={"menu-text-section"}>
                        <div onClick={() => router.push("/products")} className={"title-focus"}>
                            <B2 weight={500}>Services</B2>
                        </div>
                        <div className={"title-focus"} onClick={() => router.push("/gallery")}>
                            <B2 weight={500}>Gallery</B2>
                        </div>
                        <div onClick={() => router.push("/franchise")} className={"title-focus"}>
                            <B2 weight={500}>Franchise </B2>
                        </div>
                        <div onClick={() => router.push("/blogs")} className={"title-focus"}>
                            <B2 weight={500}>Blogs </B2>
                        </div>
                        <div onClick={() => router.push('/contact-us')} className={"title-focus"}>
                            <B2 weight={500}>Contact Us</B2>
                        </div>
                        <div onClick={() => router.push("/booking")} className={"book"}>
                            <B2 color={"#FFFFFF"} weight={500}>Book With Us</B2>
                        </div>

                    </div>
                    <div className={"menu-section"} onClick={() => ChangeValue()}>
                        <Image
                            src={"https://cdn.deepsense.space/nails/assets/images/menuicon.png"}
                            alt={"icon"}
                            layout={"fixed"}
                            width={24}
                            height={24}
                        />
                    </div>
                </div>
                <div className={"title"}>
                    <div className={"title-focus mb-5 mt-4"} onClick={() => ChangeValue("/products")}>
                        <S1 weight={500}>Services</S1>
                    </div>
                    <div className={"title-focus mb-5"} onClick={() => ChangeValue("/gallery")}>
                        <S1 weight={500}>Gallery</S1>
                    </div>
                    <div className={"title-focus mb-5"} onClick={() => ChangeValue("/franchise")}>
                        <S1 weight={500}>Franchise </S1>
                    </div>
                    <div className={"title-focus mb-5"} onClick={() => ChangeValue("/blogs")}>
                        <S1 weight={500}>Blogs </S1>
                    </div>
                    <div className={"title-focus mb-5"} onClick={() => ChangeValue("/contact-us")}>
                        <S1 weight={500}>Contact Us</S1>
                    </div>
                    <div className={"book mb-4"} onClick={() => ChangeValue("/booking")}>
                        <S1 color={"#FFFFFF"} font-weight={500}>Book With Us</S1>
                    </div>
                    <div className={"close mt-3 mb-4"} onClick={() => ChangeValue(null)}>
                        <Image
                            src={"https://cdn.deepsense.space/nails/assets/images/taggleclose.png"}
                            alt={"icon"}
                            layout={"fixed"}
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </HeaderStyled>
    );
};

export default Header;