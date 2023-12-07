import {useMediaQuery} from "react-responsive";
import {useEffect, useRef, useState} from "react";
import {Navigation,Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import { v4 as uuidv4 } from 'uuid';
import { HomeBannerStyled } from "./HeroBanner.styled";
import {B2, S1} from "../../elements/Font/Font.styled";
import { MDBBtn,MDBIcon } from 'mdb-react-ui-kit';
import {useRouter} from "next/router";
import CustomImage from "../CustomImage/CustomImage";
import dynamic from "next/dynamic";



const HeroBanner = (props) => {
    const swiperRef = useRef();
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224  });
    const router = useRouter();
    const [hasMounted, setHasMounted] = useState(false);
    const [bannerData, setBannerData] = useState(props.HomeBanner);




    useEffect(() => {
        setHasMounted(true);
    }, []);

    const navigateToServices = () => {
        router.push("/products");
    }

    if (!hasMounted) {
        return null;
    }

    return(
        <HomeBannerStyled className={"position-relative"}>
            <Swiper className={"mySwiper"}
                    loop={true}
                    autoplay={{delay: 3000}}
                    modules={[Navigation,Autoplay]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
            >
                {
                    bannerData?.map((item)=>{
                        return(
                            <SwiperSlide key={uuidv4()}>
                                <div className={"swiper-card-item position-relative"}>
                                    {
                                        isDesktopOrLaptop ?
                                            <CustomImage
                                                src={item?.desktopImage}
                                                alt={"hero banner"}
                                                layout={"fill"}
                                                objectFit={"cover"}
                                                objectPosition={"center"}
                                                fallbackImg={"https://cdn.deepsense.space/nails/assets/images/homebanner.png"}
                                            />:
                                            <CustomImage
                                                src={item?.mobileImage}
                                                alt={"hero banner"}
                                                layout={"fill"}
                                                objectFit={"cover"}
                                                objectPosition={"center"}
                                                fallbackImg={"https://cdn.deepsense.space/nails/assets/images/homebanner.png"}
                                            />
                                    }
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className={"banner-details"}>
                <S1 className={"text-left text-sm-center banner-title"} weight={500}>Nails That Go Beyond</S1>
                <B2 className={"text-left text-sm-center banner-description"} weight={400}>Experience our curated collection of expert nail artistry services to take your nail art game to the next level</B2>
                {
                    isDesktopOrLaptop &&
                    <MDBBtn className={"service-btn"} onClick={navigateToServices}>
                        Our Services
                    </MDBBtn>
                }
                <div className={"d-flex justify-content-between justify-content-sm-center align-items-center gap-4 custom-navigation"}>
                    <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slidePrev()} className={"floating-btn"}>
                        <MDBIcon fas icon="arrow-left" size='lg' className={"icon"}/>
                    </MDBBtn>
                    <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slideNext()} className={"floating-btn"}>
                        <MDBIcon fas icon="arrow-right" size='lg' className={"icon"}/>
                    </MDBBtn>
                </div>
            </div>
            {
                !isDesktopOrLaptop &&
                <>
                    <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slidePrev()} className={"floating-btn small-device-left"}>
                        <MDBIcon fas icon="arrow-left" size='lg' className={"icon"}/>
                    </MDBBtn>
                    <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slideNext()} className={"floating-btn small-device-right"}>
                        <MDBIcon fas icon="arrow-right" size='lg' className={"icon"}/>
                    </MDBBtn>
                </>
            }
        </HomeBannerStyled>
    )
}
export default dynamic (() => Promise.resolve(HeroBanner), {ssr: false})






