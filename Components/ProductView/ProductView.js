import {ProductViewContainerStyled} from "./ProductView.styled";
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade} from "swiper";
import Image from "next/image";
import {B1, B2, S1} from "../../elements/Font/Font.styled";
import Link from "next/link";
import React, {useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {ContainedButton} from "../../elements/Button/Button";
import { v4 as uuidv4 } from 'uuid';
import CustomImage from "../CustomImage/CustomImage";
import { useRouter } from 'next/router';


const ProductView = (props) => {
    const {toggleModal,product} = props;
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224  });
    const swiperRef = useRef();
    const router = useRouter();
    const handleShareDesign = () => {
        if (navigator.share) {
            const urlLink = router.asPath;
            navigator.share({
                title: 'Share Design',
                text: 'Check out this design',
                url: urlLink
            })
                .then(() => {
                    console.log('Design shared successfully');
                })
                .catch((error) => {
                    console.error('Error sharing design:', error);
                });
        }
    };


    return(
        <ProductViewContainerStyled>
            <div className={"product-container"}>
                <div className={"row"}>
                    <div className={"col-sm-5"}>
                        <div className={'position-relative product-image-section'}>
                            {
                                !isDesktopOrLaptop &&
                                <div className={"d-flex justify-content-end"}>
                                    <MDBBtn size='lg' floating tag='a' onClick={toggleModal} className={"floating-btn close"}>
                                        <MDBIcon fas icon="times" size='lg' className={"icon"}/>
                                    </MDBBtn>
                                </div>
                            }
                            <div className={"product-image-slider-container position-relative"}>
                                <Swiper
                                    speed={1000}
                                    slidesPerView={1}
                                    loop={true}
                                    effect={"fade"}
                                    modules={[EffectFade]}
                                    onBeforeInit={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                >
                                    {
                                        product?.gallery?.map((item) =>{
                                            return(
                                                <SwiperSlide key={uuidv4()}>
                                                    <div className={isDesktopOrLaptop ? "": "d-flex justify-content-center"}>
                                                        {
                                                            isDesktopOrLaptop ?
                                                                <CustomImage
                                                                    src={item.desktopImage?item.desktopImage:"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                                    alt={"product"}
                                                                    width={327}
                                                                    height={432}
                                                                    style={{borderRadius:"10px"}}
                                                                    fallbackImg={"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                                />:
                                                                <CustomImage
                                                                    src={item.mobileImage?item.mobileImage:"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                                    alt={"product"}
                                                                    width={148}
                                                                    height={172}
                                                                    style={{borderRadius:"10px"}}
                                                                    fallbackImg={"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                                />
                                                        }
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                {
                                    !isDesktopOrLaptop && product?.gallery?.length > 1 &&
                                    <div className={'d-flex gap-5 align-items-center'}>
                                        <div className={'leftArrow-btn'} onClick={() => swiperRef.current?.slidePrev()}>
                                            <MDBIcon fas icon="arrow-left" size={"lg"}/>
                                        </div>
                                        <div className={'rightArrow-btn'} onClick={() => swiperRef.current?.slideNext()}>
                                            <MDBIcon fas icon="arrow-right" size={"lg"}/>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className={'d-flex justify-content-center align-items-center mt-3'}>
                                {
                                    !isDesktopOrLaptop ?   <MDBBtn className={"share-btn px-0" }  onClick={handleShareDesign}>
                                        <MDBIcon fas icon="share-alt" size={"lg"} />
                                        <B2 className={"ms-3"} weight={400}>Share Design</B2>
                                    </MDBBtn> : ""
                                }
                                {
                                    isDesktopOrLaptop && product?.gallery?.length > 1 &&
                                    <div className={'d-flex gap-5 w-100 justify-content-between align-items-center'}>
                                        <div className={'leftArrow-btn'} onClick={() => swiperRef.current?.slidePrev()}>
                                            <MDBIcon fas icon="arrow-left" size={"lg"}/>
                                        </div>
                                        <div className={'rightArrow-btn'} onClick={() => swiperRef.current?.slideNext()}>
                                            <MDBIcon fas icon="arrow-right" size={"lg"}/>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"col-sm-7"}>
                        <div className={"product-detail-section ps-sm-4 ps-0"}>
                            {
                                isDesktopOrLaptop &&
                                <div className={"d-flex justify-content-end"}>
                                    <MDBBtn size='lg' floating tag='a' onClick={toggleModal} className={"floating-btn close"}>
                                        <MDBIcon fas icon="times" size='lg' className={"icon"}/>
                                    </MDBBtn>
                                </div>
                            }
                            <div className={"py-sm-4"}>
                                <S1 weight={500} className={"product-name text-center text-sm-start"}>
                                    {product.name}
                                </S1>
                                <B1 weight={500} className={"product-description"} color={"#384955"}>
                                    {product.longDescription}
                                </B1>
                                <div className={'d-flex justify-content-center justify-content-sm-start align-items-center mb-4'}>
                                    <div className={"d-flex gap-2 align-items-center"}>
                                        <Image
                                            src={"https://cdn.deepsense.space/nails/assets/images/hash-tag.svg"}
                                            alt={"clock"}
                                            width={16}
                                            height={16}
                                        />
                                        <B2 weight={500} color={"#BFBBC2"} className={'mb-0'}>{product.sku}</B2>
                                    </div>
                                    <div className={"vertical-line"}/>
                                    <div className={"d-flex gap-2 align-items-center"}>
                                        <Image
                                            src={"https://cdn.deepsense.space/nails/assets/images/clock.svg"}
                                            alt={"clock"}
                                            width={16}
                                            height={16}
                                        />
                                        <B2 weight={500} color={"#BFBBC2"} className={'mb-0'}>{product.duration}</B2>
                                    </div>
                                </div>
                                <div className={"d-flex justify-content-center justify-content-sm-start"}>
                                    <Link href={`/booking?product=${product.id}`}>
                                        <ContainedButton padding={"16px 48px"} fontSize={"16px"}>
                                            Book Appointment!
                                        </ContainedButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </ProductViewContainerStyled>
    )
}
export default ProductView;