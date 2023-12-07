import {Swiper, SwiperSlide} from 'swiper/react';
import {useEffect, useRef, useState} from "react";
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";
import {useMediaQuery} from "react-responsive";
import {ImageSliderContainerStyle, MainContainerStyle, SwiperCardContainerStyle} from "./styled";
import {B1, B2, H6} from "../../elements/Font/Font.styled";
import {ContainedButton} from "../../elements/Button/Button";
import {Pagination} from "swiper";
import CustomModal from "../CustomModal/CustomModal";
import ProductView from "../ProductView/ProductView";
import {v4 as uuidv4} from 'uuid';
import CustomImage from "../CustomImage/CustomImage";
import Link from "next/link";
import dynamic from "next/dynamic";

const BestSeller = (props) => {
    const swiperRef = useRef();
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const isDesktopOrLaptop2 = useMediaQuery({minWidth: 1000});
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});

    const [bestSellerData, setBestSellerData] = useState(props.BestSellers)

    const slidesPerView = 3;

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const chooseDesign = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    }


    return (
        <MainContainerStyle className={"top-picks-component"}>
            {
                !isDesktopOrLaptop && (
                    <>
                        <B2 weight={400} className={"head mb-3"} color={"#384955"}>Best Sellers</B2>
                        <H6 weight={500} className={"title"}>Unleash your cosmic side with celestial themed nail art</H6>
                        <B2 weight={400} className={"description"} color={"#384955"}>Embrace the beauty of the stars, moons,
                            and galaxies through shimmering metallic hues, celestial motifs,
                            and celestial accents. These designs are perfect for adding a touch of magic to your nails.</B2>
                    </>
                )
            }
            <div className={"ds-Best-seller-section"}>
                <div className={"swiper-container position-relative"}>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        slideper
                        loop={true}
                        breakpoints={{
                            700: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                                centeredSlides:false,
                            },
                            1350: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                                centeredSlides: true,
                            }
                        }}

                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                            console.log(swiper)
                        }}
                    >
                        {
                            bestSellerData?.edges.map((item) => {
                                return (
                                    <SwiperSlide key={uuidv4()}>
                                        <SwiperCard product={item.node} chooseDesign={chooseDesign}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                {
                    isDesktopOrLaptop && (
                        <div className={"ds-best-seller-text"}>

                            <B2 weight={400} className={"head mb-3"} color={"#384955"}>Best Sellers</B2>
                            <H6 weight={500} className={"title"}>Unleash your cosmic side with celestial themed nail
                                art</H6>
                            <B2 weight={400} className={"description"} color={"#384955"}>Embrace the beauty of the stars,
                                moons, and galaxies through shimmering metallic hues, celestial motifs,
                                and celestial accents. These designs are perfect for adding a touch of magic to your
                                nails.</B2>

                            {
                                bestSellerData?.edges.length > slidesPerView &&
                                <>
                                    <div className={"controll-button"}>
                                        <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slidePrev()}
                                                className={"floating-btn ds-left"}>
                                            <MDBIcon fas icon="arrow-left" size='lg' className={"icon"}/>
                                        </MDBBtn>
                                        <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slideNext()}
                                                className={"floating-btn ds-right"}>
                                            <MDBIcon fas icon="arrow-right" size='lg' className={"icon"}/>
                                        </MDBBtn>
                                    </div>
                                </>
                            }
                        </div>
                    )
                }
            </div>
            <div className={"d-flex justify-content-center gap-4"}>
                {
                    !isDesktopOrLaptop && bestSellerData?.edges.length > 1 &&
                    <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slidePrev()}
                            className={"floating-btn left"}>
                        <MDBIcon fas icon="arrow-left" size='lg' className={"icon"}/>
                    </MDBBtn>
                }
                {
                    !isDesktopOrLaptop2 && (
                        <Link href={"/products"}>
                            <ContainedButton fontSize={"16px"} padding={"16px 48px"}>Explore Designs</ContainedButton>
                        </Link>
                    )
                }
                {
                    !isDesktopOrLaptop && bestSellerData?.edges.length > 1 &&
                    <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slideNext()}
                            className={"floating-btn right"}>
                        <MDBIcon fas icon="arrow-right" size='lg' className={"icon"}/>
                    </MDBBtn>
                }
            </div>

            <CustomModal show={showModal} setShowModal={setShowModal} toggleModal={toggleModal}>
                <ProductView toggleModal={toggleModal} product={selectedProduct}/>
            </CustomModal>
        </MainContainerStyle>
    )
}
export default dynamic(() => Promise.resolve(BestSeller), {ssr: false})


const SwiperCard = (props) => {
    const {product, chooseDesign} = props;
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});

    return (
        <SwiperCardContainerStyle className={"d-flex flex-column justify-content-center align-items-center"}>
            <Swiper
                className="mySwiper2 swiper-v"
                direction={"horizontal"}
                spaceBetween={50}
                nested={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {
                    product?.gallery.map((item) => {
                        return (
                            <SwiperSlide key={uuidv4()}>
                                <ImageSliderContainerStyle>
                                    <div className={"image-slider-card position-relative"}>
                                        {
                                            isDesktopOrLaptop ?
                                                <CustomImage
                                                    src={item.desktopImage}
                                                    fallbackImg={"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                    alt={""}
                                                    layout={"fill"}
                                                    objectFit={"cover"}
                                                    width={343}
                                                    objectPosition={"center"}
                                                    priority={false}
                                                /> :
                                                <CustomImage
                                                    src={item.mobileImage}
                                                    fallbackImg={"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                    alt={""}
                                                    layout={"fill"}
                                                    objectFit={"cover"}
                                                    objectPosition={"center"}
                                                    priority={false}
                                                />
                                        }
                                        <div className={"overlay"}>
                                            <B2 color={"#FFFFFF"} weight={400} className={"mb-0"}>{product.sku}</B2>
                                        </div>
                                    </div>
                                </ImageSliderContainerStyle>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <B1 weight={500} color={"#384955"} className={"mb-4 mt-2 top-pick-name"}>{product.name}</B1>
            <ContainedButton
                padding={isDesktopOrLaptop ? "14px 88px" : "14px 32px"}
                width={"280px"}
                bg_color={"#FFFFFF"}
                color={"#5B307C"}
                active_bg_color={"#FFFFFF"}
                border_color={"#5B307C"}
                fontSize={"16px"}
                onClick={() => chooseDesign(product)}
            >
                Choose Design
            </ContainedButton>
        </SwiperCardContainerStyle>
    )
}

