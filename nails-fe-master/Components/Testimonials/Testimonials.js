import React, {useEffect, useState} from "react";
import {TestimonialStyled} from "./Testimonials.styled";
import {B2, H6} from "../../elements/Font/Font.styled";
import {useMediaQuery} from 'react-responsive';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {v4 as uuidv4} from 'uuid';
import CustomImage from "../CustomImage/CustomImage";
import dynamic from "next/dynamic";

const Testimonials = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const [activeIndex, setActiveIndex] = useState(0);


    const [testimonial, setTestimonial] = useState(props.TestimonialData);

    useEffect(() => {
        return () => {
            console.log(props.TestimonialData,"data")
        };
    }, [props.TestimonialData]);


    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };

    return (
        <TestimonialStyled>
            <H6 className={'text-center title'}> Testimonials</H6>
            {
                testimonial?.length > 0 &&
                <div className={"testimonial-swiper-container"}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        pagination={{clickable: true, dynamicBullets: true}}
                        speed={1800}
                        slidesPerView={isDesktopOrLaptop?3:1}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={isDesktopOrLaptop?30:20}
                        className="mySwiper"
                        // initialSlide={isDesktopOrLaptop?2:1}
                        navigation
                        onSlideChange={handleSlideChange}
                        autoplay={{
                            delay: 2000,
                        }}
                    >
                        {testimonial?.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className={"card-section"}>
                                    <H6 className="name text-center">{data.name}</H6>
                                    <B2 className="description">{data.description}</B2>
                                    {data.desktopImage || data.mobileImage ? (
                                        <div className="image-section">
                                            <div className="profile-image">
                                                <CustomImage
                                                    src={isDesktopOrLaptop ? data.desktopImage : data.mobileImage}
                                                    alt="profilepic"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    objectPosition="center"
                                                    fallbackImg={"https://cdn.deepsense.space/nails/assets/images/test3.png"}
                                                />
                                            </div>
                                        </div>
                                    ) : ''}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            }
        </TestimonialStyled>
    );
};

// export default Testimonials;
export default dynamic(() => Promise.resolve(Testimonials), {ssr: false})

