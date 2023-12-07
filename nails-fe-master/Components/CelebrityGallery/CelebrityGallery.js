import React, {useEffect, useState} from "react";
import {CelebrityGalleryStyled} from "./CelebrityGallery.styled";
import Image from "next/image";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {useMediaQuery} from "react-responsive";
import {B1, B2, H6} from "../../elements/Font/Font.styled";
import {useLazyQuery} from "@apollo/client";
import {GET_GALLERIES_QUERY} from "../../Apollo/query/GetGalleriesQuery";

const CelebrityGallery = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const [play, setPlay] = useState(false);
    const [activeData, setActiveData] = useState(0);
    const [galleriesData, setGalleriesData] = useState('')
    const [CelebrityData, setCelebrityData] = useState('')
    const [getGalleriesData] = useLazyQuery(GET_GALLERIES_QUERY)


    useEffect(() => {
        GalleriesDataApi()
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const GalleriesDataApi = async () => {
        try {
            await getGalleriesData({variables: {galleryType: "CELEBRITY"}}).then(({data}) => {
                setGalleriesData(data.galleries)
                setCelebrityData(data.galleries[0].galleryMedias)
            });
        } catch (error) {
            console.log(error)
        }
    }

    let getAllVideoClassName
    const pauseVideoFunc = (data) => {
        setActiveData(data)
        setPlay(false);
        if (activeData !== data) {
            getAllVideoClassName = document.querySelectorAll(".video-tag")
            for (let i = 0; i < getAllVideoClassName.length; i++) {
                getAllVideoClassName[i].pause()
            }
        }
    }

    const playHandler = async (index, id) => {
        if (activeData === index) {
            if (play) {
                setPlay(false);
                await document.getElementById(id).pause();
            } else {
                setPlay(true);
                await document.getElementById(id).play();
            }
        }
    };


    useEffect(() => {
        if (CelebrityData.length > 0 && isDesktopOrLaptop) {
            var celebritys = document.getElementById("celebritys");
            celebritys.innerHTML = `<div> <p className="text-center " id="celebrity-name"> ${CelebrityData[activeData]?.name}  </p>
                                          <p className="text-center" id="celebrity-description">${CelebrityData[activeData]?.description} </p>   
           </div>`;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeData]);


    return (
        <CelebrityGalleryStyled>

            {galleriesData.length > 0 &&
                galleriesData?.map((data, index) => (
                    <div key={index}>
                        {!isDesktopOrLaptop && (
                            <div className="mobile-heading">
                                <H6 color="red" className="text-center celebrity-title">{data.name}</H6>
                                <B2
                                    color="#384955"
                                    margin={"8px"}
                                    line-height="22px"
                                    weight={400}
                                    className="text-center celebrity-subtitle"
                                >{data.description}</B2>
                            </div>
                        )}
                        <div className="celebrity-gallery-part">
                            {isDesktopOrLaptop && (
                                <div>
                                    <H6 color="red" className="text-center celebrity-title">{data.name}</H6>
                                    <B2
                                        color="#384955"
                                        margin={"8px auto 27px auto"}
                                        line-height="22px"
                                        weight={400}
                                        className="text-center celebrity-subtitle"
                                    >{data.description}</B2>
                                </div>
                            )}
                            <div className="celebrity-gallery-carousel">
                                <Swiper
                                    onSlideChange={(e) => pauseVideoFunc(e.realIndex)}
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    pagination={{clickable: true, dynamicBullets: true}}
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    speed={1000}
                                    // loop={true}
                                    className="mySwiper"
                                    centeredSlides={true}
                                    initialSlide={0}
                                    coverflowEffect={{
                                        rotate: 0,
                                        stretch: 0,
                                        depth: 300,
                                        modifier: 1,
                                        slideShadows: true,
                                        scale: 1,
                                    }}
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    navigation
                                    breakpoints={{
                                        "@0.00": {
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                        },
                                        "@1.00": {
                                            slidesPerView: 3,
                                            spaceBetween: 10,
                                        },
                                        "@1.50": {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                >
                                    {CelebrityData.map((data, index) => (
                                        <SwiperSlide key={index} className="swiper-slide cursor-pointer">
                                            <div className="cursor-pointer">
                                                {data?.providerUrl === null ?
                                                    <video
                                                        poster={(data.mobileImage === null && data.desktopImage === null) ?
                                                            (isDesktopOrLaptop ? data.thumbnailDesktop : data.thumbnailMobile) : (isDesktopOrLaptop ? data.desktopImage : data.mobileImage)}
                                                        onClick={((data.mobileImage === null && data.desktopImage === null) && ((data.providerUrl === null))) ? (() => playHandler(index, data.id)) : undefined}
                                                        width="100%"
                                                        height={"100%"}
                                                        autoPlay={false}
                                                        id={data.id}
                                                        className={"video-tag"}
                                                    >
                                                        <source
                                                            src={data.providerUrl === null ? (isDesktopOrLaptop ? data.hostedUrlMobile : data.hostedUrlDesktop) : data.providerUrl}
                                                            type="video/mp4"/>
                                                    </video>
                                                    :
                                                    <iframe width="100%" height='100%' src={data.providerUrl}></iframe>
                                                }
                                                {play === false && (data.mobileImage === null && data.desktopImage === null) && (data.providerUrl === null) && (
                                                    <div className="video-btn">
                                                        <Image
                                                            src={"https://cdn.deepsense.space/nails/assets/images/videoPlay.png"}
                                                            alt={"storeMap"}
                                                            layout={"fixed"}
                                                            width={isDesktopOrLaptop ? 60 : 40}
                                                            height={isDesktopOrLaptop ? 60 : 40}
                                                            onClick={((data.mobileImage === null && data.desktopImage === null) && ((data.providerUrl === null))) ? (() => playHandler(index, data.id)) : undefined}
                                                        />
                                                    </div>
                                                )}
                                                {!isDesktopOrLaptop && (
                                                    <div
                                                        className="celebritys-data"
                                                        key={index}
                                                        variants={{
                                                            visible: {transition: {staggerChildren: 0}},
                                                        }}
                                                        initial="hidden"
                                                        animate="visible"
                                                        exit={{opacity: 0, transition: {duration: 1}}}
                                                    >
                                                        <B1 className="text-center ">{data.name}</B1>
                                                        <B2 className="text-center">{data.description}</B2>
                                                    </div>
                                                )}
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                {isDesktopOrLaptop && CelebrityData.length > 0 && (
                                    <div className="celebritys-data" id="celebritys">
                                        <B1 className="text-center " id="celebrity-name">
                                            {CelebrityData[activeData]?.name && CelebrityData[activeData]?.name}
                                        </B1>
                                        <B2 className="text-center">
                                            {CelebrityData[activeData]?.description && CelebrityData[activeData]?.description}
                                        </B2>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            }
        </CelebrityGalleryStyled>
    );
};
export default CelebrityGallery;
