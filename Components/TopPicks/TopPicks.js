import {Swiper, SwiperSlide} from 'swiper/react';
import {useEffect, useRef, useState} from "react";
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";
import {useMediaQuery} from "react-responsive";
import {ImageSliderContainerStyle, MainContainerStyle, SwiperCardContainerStyle} from "./TopPicks.styled";
import {B1, B2, H6} from "../../elements/Font/Font.styled";
import {ContainedButton} from "../../elements/Button/Button";
import {Pagination} from "swiper";
import CustomModal from "../CustomModal/CustomModal";
import ProductView from "../ProductView/ProductView";
import {v4 as uuidv4} from 'uuid';
import CustomImage from "../CustomImage/CustomImage";
import Link from "next/link";
import dynamic from "next/dynamic";

const TopPicks = (props) => {
    const swiperRef = useRef();
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const [hasMounted, setHasMounted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});

    const [topPickData, setTopPickData] = useState(props.TopPick)


    const slidesPerView = 3;
    useEffect(() => {
        setHasMounted(true);
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const chooseDesign = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    }

    if (!hasMounted) {
        return null;
    }
    return (
        <MainContainerStyle className={"top-picks-component"}>
            <H6 weight={500} className={"title text-center"}>What’s Trending?</H6>
            <B2 weight={400} className={"description text-center"} color={"#384955"}>Discover the latest designs to glam
                up your nails</B2>
            <div className={"swiper-container position-relative"}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        1224: {
                            slidesPerView: slidesPerView,
                            spaceBetween: 40
                        }
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {
                        topPickData?.edges.map((item) => {
                            return (
                                <SwiperSlide key={uuidv4()}>
                                    <SwiperCard product={item.node} chooseDesign={chooseDesign}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                {
                    isDesktopOrLaptop && topPickData?.edges.length > slidesPerView &&
                    <>
                        <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slidePrev()}
                                className={"floating-btn left"}>
                            <MDBIcon fas icon="arrow-left" size='lg' className={"icon"}/>
                        </MDBBtn>
                        <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slideNext()}
                                className={"floating-btn right"}>
                            <MDBIcon fas icon="arrow-right" size='lg' className={"icon"}/>
                        </MDBBtn>
                    </>
                }
            </div>
            <div className={"d-flex justify-content-center gap-4"}>
                {
                    !isDesktopOrLaptop && topPickData?.edges.length > 1 &&
                    <MDBBtn size='lg' floating tag='a' onClick={() => swiperRef.current?.slidePrev()}
                            className={"floating-btn left"}>
                        <MDBIcon fas icon="arrow-left" size='lg' className={"icon"}/>
                    </MDBBtn>
                }
                <Link href={"/products"}>
                    <ContainedButton  fontSize={"16px"} padding={"16px 48px"}>Explore Designs</ContainedButton>
                </Link>
                {
                    !isDesktopOrLaptop && topPickData?.edges.length > 1 &&
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

// export default TopPicks;
export default dynamic(() => Promise.resolve(TopPicks), {ssr: false})


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
                                                    src={item.desktopImage ? item.desktopImage : "https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                    fallbackImg={"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                    alt={""}
                                                    layout={"fill"}
                                                    objectFit={"cover"}
                                                    width={343}
                                                    objectPosition={"center"}
                                                    priority={false}
                                                /> :
                                                <CustomImage
                                                    src={item.mobileImage ? item.mobileImage : "https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                    fallbackImg={"https://cdn.deepsense.space/nails/assets/images/nail.png"}
                                                    alt={""}
                                                    layout={"fill"}
                                                    objectFit={"cover"}
                                                    objectPosition={"center"}
                                                    priority={false}
                                                />
                                        }
                                        {/*<Image src={NailImg} alt={""} layout={"fill"} objectFit={"cover"} objectPosition={"center"}/>*/}
                                        <div className={"overlay"}>
                                            <B2 color={"#FFFFFF"} weight={400} className={"mb-0"}>{product.sku}</B2>
                                            {/*<MDBIcon fas icon="share-alt" color={"white"}/>*/}
                                        </div>
                                    </div>
                                </ImageSliderContainerStyle>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <B1 weight={500} color={"#384955"} className={"mb-3 top-pick-name"}>{product.name}</B1>
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

