import { Swiper, SwiperSlide } from 'swiper/react';
import React, {useEffect, useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {useLazyQuery} from "@apollo/client";
import GET_Ftestimonial from "../../Apollo/query/GetFranchiseTestimonialQuery";
import {B1, B2, H6} from "../../elements/Font/Font.styled";
import {TestStyled} from "./TestSlider.styled";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const TestSlider = () =>{
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const [activeIndex, setActiveIndex] = useState(0);


    const [testimonial, setTestimonial] = useState([]);
    const [getTestimonialData] = useLazyQuery(GET_Ftestimonial);
    function ApiCalling() {
        try {
            getTestimonialData({variables: {testimonialType:"FRANCHISE"}}).then(({data, errors}) => {
                if (data) {
                    setTestimonial(data.testimonials)
                    console.log(data.testimonials)
                }
            });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        ApiCalling()
        return()=>{
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
    };
    return(
        <TestStyled>
            <H6 weight={600} className={"title text-center"}>Testimonials</H6>

            <Swiper
                // onSlideChange={(e) => setActiveData(e.realIndex)}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{clickable: true, dynamicBullets: true}}
                spaceBetween={20}
                slidesPerView={3}
                speed={1000}
                onSlideChange={handleSlideChange}
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
                <div className=" d-flex" style={{ height: "435px" }}>
                    {testimonial.map((data, index) => (
                        <SwiperSlide
                            key={data.id}
                            className={activeIndex === index ? "active" : ""}
                        >
                            <div className="card-section ">
                                <H6 className="name text-center">{data.name}</H6>
                                <B2 className="description">{data.description}</B2>
                            </div>
                            <div className="image-section">

                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </TestStyled>
    )
}

export default  TestSlider;