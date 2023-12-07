import React from "react";
import {useMediaQuery} from "react-responsive";
import {ImageSliderContainerStyle, PRODUCT_CARD_STYLED} from "./ProductCard.styled";
import {B2} from "../../elements/Font/Font.styled";
import {MDBIcon,} from 'mdb-react-ui-kit';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Pagination} from "swiper";
import "swiper/css/effect-fade";
import 'swiper/css';
import 'swiper/css/pagination';
import CustomImage from "../CustomImage/CustomImage";
import { v4 as uuidv4 } from 'uuid';


const ProductCard = (props) => {
    const {product,chooseDesign} = props;
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    return (
        <PRODUCT_CARD_STYLED>
            <div className={"product-card-section"} >
                <div className={"image-section"}>
                    <Swiper
                        effect={"fade"}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Pagination]}
                    >
                        {
                            product?.gallery?.map((item) => {
                                return (
                                    <SwiperSlide key={uuidv4()}>
                                        <ImageSliderContainerStyle >
                                            <div className={"image-slider-card position-relative" }>
                                                {
                                                    isDesktopOrLaptop ?
                                                        <CustomImage
                                                            src={item.desktopImage?item.desktopImage:"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                            fallbackImg={"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                            alt={""}
                                                            layout={"fill"}
                                                            objectFit={"cover"}
                                                            objectPosition={"center"}
                                                        />:
                                                        <CustomImage
                                                            src={item.mobileImage?item.mobileImage:"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                            fallbackImg={"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                            alt={""}
                                                            layout={"fill"}
                                                            objectFit={"cover"}
                                                            objectPosition={"center"}
                                                        />
                                                }
                                                {/*<Image src={NailImg} alt={""} layout={"fill"} objectFit={"cover"} objectPosition={"center"}/>*/}
                                                <div className={"overlay"}>
                                                    <B2 color={"#FFFFFF"} weight={400} className={"mb-0"}>{product.sku}</B2>
                                                    {/*<MDBIcon fas icon="share-alt" color={"white"} />*/}
                                                </div>
                                            </div>
                                        </ImageSliderContainerStyle>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <B2 className={"mb-2 text-center product-name"} color={"#384955"} weight={500} onClick={() => chooseDesign(product)}>{product.name}</B2>
                <div className={"d-flex justify-content-center"}>
                    <button className="product-cta" onClick={() => chooseDesign(product)}>
                        Choose Design
                    </button>
                </div>
            </div>
        </PRODUCT_CARD_STYLED>)
};

export default ProductCard;