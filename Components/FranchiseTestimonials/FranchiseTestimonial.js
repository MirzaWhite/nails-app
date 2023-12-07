import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import {useMediaQuery} from 'react-responsive';
import {B2, H6, S1} from "../../elements/Font/Font.styled";
import {useLazyQuery} from "@apollo/client";
import GET_Ftestimonial from "../../Apollo/query/GetFranchiseTestimonialQuery"
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import dynamic from "next/dynamic";

const FranchiseTestimonials = () => {

    const [testimonial, setTestimonial] = useState([]);
    const [imageError, setImageError] = useState(false);
    const [imageError2, setImageError2] = useState(false);
    const [getTestimonialData] = useLazyQuery(GET_Ftestimonial);

    const handleImageError = () => {
        setImageError(true);
    };
    const handleImageError2 = () => {
        setImageError2(true);
    };

    function ApiCalling() {
        try {
            getTestimonialData({variables: {testimonialType: "FRANCHISE"}}).then(({data, errors}) => {
                if (data) {
                    setTestimonial(data.testimonials)
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ApiCalling()
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const Review = "https://cdn.deepsense.space/nails/assets/images/review.png"


    const isDesktopOrLaptop = useMediaQuery({query: "(min-width:1224px)",});
    return (
        <>
            {
                testimonial.length > 0 && <FranchiseTestimonialsStyle>
                    <div className={"FranchiseTestimonial"}>
                        <div className={"head"}>
                            <H6 color={"#5B307C"} weight={500} className={"mb-2 head "}>Franchise Testimonials</H6>
                            <B2 color={"#384955"} weight={400} className={"mb-4"}>What our precious clients have to say
                                about our franchise!</B2>
                        </div>

                        {
                            isDesktopOrLaptop ?
                                <Swiper
                                    // install Swiper modules
                                    className="mySwiper"
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    loop={true}
                                    slidesPerView={3}
                                    navigation
                                    pagination={{clickable: true}}
                                >
                                    {
                                        testimonial.map((item, index) => {
                                            return (

                                                <SwiperSlide key={index}>
                                                    <div className={"testimonial-box"}>
                                                        {
                                                            item?.desktopImage && <div className={"profile"}>
                                                                <Image className={"profile-image"}
                                                                       src={imageError ? "https://cdn.deepsense.space/nails/assets/images/FranchiseTestimonialDummy.png":item.desktopImage}
                                                                       alt={'profilepic'}
                                                                       layout={"fixed"}
                                                                       width={140}
                                                                       height={140}
                                                                       onError={handleImageError}
                                                                >
                                                                </Image>
                                                            </div>
                                                        }

                                                        <S1 color={"#592F79"} weight={500}
                                                            className={"mb-1 "}>{item.name}</S1>
                                                        <B2 color={"#592F79"} weight={400}
                                                            className={"mb-2"}>{item.role}</B2>
                                                        <B2 color={"#384955"} weight={400}
                                                            className={"mb-3"}>{item.description}</B2>
                                                        <div className={"review-start"}>
                                                            {
                                                                item.rating === 1 &&
                                                                <Image src={Review} alt={'review'} layout={"fixed"}
                                                                       width={16}
                                                                       height={16}>
                                                                </Image>
                                                            }
                                                            {
                                                                item.rating === 2 &&
                                                                <>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                </>
                                                            }
                                                            {
                                                                item.rating === 3 &&
                                                                <>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                </>
                                                            }
                                                            {
                                                                item.rating === 4 &&
                                                                <>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                </>
                                                            }
                                                            {
                                                                item.rating === 5 &&
                                                                <>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                :
                                <Swiper
                                    // install Swiper modules
                                    className="mySwiper"
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    loop={true}
                                    pagination={{clickable: true}}
                                >
                                    {
                                        testimonial.map((item, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className={"testimonial-box"}>
                                                        {
                                                            item?.mobileImage &&   <div className={"profile"}>
                                                                <Image className={"profile-image"}
                                                                       src={imageError2 ? "https://cdn.deepsense.space/nails/assets/images/FranchiseTestimonialDummy.png": item.mobileImage}
                                                                       alt={"FranchiseTesimonialProfile"}
                                                                       layout={"fixed"}
                                                                       width={140}
                                                                       height={140}
                                                                       onError={handleImageError2}
                                                                >
                                                                </Image>
                                                            </div>
                                                        }

                                                        <S1 color={"#592F79"} weight={500}
                                                            className={"mb-1"}>{item.name}</S1>
                                                        <B2 color={"#592F79"} weight={400}
                                                            className={"mb-2"}>{item.role}</B2>
                                                        <B2 color={"#384955"} weight={400}
                                                            className={"mb-3"}>{item.description}</B2>
                                                        <div className={"review-start"}>
                                                            {
                                                                item.rating === 1 &&
                                                                <Image src={Review} alt={'review'} layout={"fixed"}
                                                                       width={16}
                                                                       height={16}>
                                                                </Image>
                                                            }
                                                            {
                                                                item.rating === 2 &&
                                                                <>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                </>
                                                            }
                                                            {
                                                                item.rating === 3 &&
                                                                <>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                </>
                                                            }
                                                            {
                                                                item.rating === 4 &&
                                                                <>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                </>
                                                            }
                                                            {
                                                                item.rating === 5 &&
                                                                <>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                    <Image src={Review} alt={'review'} layout={"fixed"}
                                                                           width={16}
                                                                           height={16}>
                                                                    </Image>
                                                                </>
                                                            }

                                                        </div>
                                                    </div>

                                                </SwiperSlide>

                                            )
                                        })
                                    }
                                </Swiper>
                        }
                    </div>
                </FranchiseTestimonialsStyle>
            }

        </>
    )
}

// export default FranchiseTestimonials;
export default dynamic(() => Promise.resolve(FranchiseTestimonials), {ssr: false})


const FranchiseTestimonialsStyle = styled.div`
  margin: 20px 0;
  @media (min-width: 900px) {
    margin: 70px 0px;
  }

  .FranchiseTestimonial {
    padding: 24px;
    text-align: -webkit-center;
    @media (min-width: 1200px) {
      padding: 0px;
      width: 90%;
      margin: 0px auto;
    }
  }

  .head {
    text-align: -webkit-center;
  }

  .testimonial-box {
    background: #EFEAF2;
    text-align: -webkit-center;
    border-radius: 80px 16px;
    padding: 24px 24px 25px 24px;
    position: relative;
    margin-top: 30px;
    width: 320px;
    @media (min-width: 767px) {
      padding: 24px 40px 24px 40px;
      width: 320px;
    }
    @media (min-width: 1000px) {
      padding: 24px 40px 24px 40px;
      width: 292px;
    }
    @media (min-width: 1300px) {
      padding: 24px 40px 24px 40px;
      width: 392px;
    }
  }

  .review-start {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .profile-image {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px 20px;
  }

  .head {
    background: linear-gradient(97.83deg, #5B307C 18.12%, #000000 86.11%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .profile {
    position: absolute;
    top: -61px;
    left: 92px;
    border-radius: 40px 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 40px 20px;
    @media (min-width: 1200px) {
      left: 85px;
    }
    @media (min-width: 1300px) {
      left: 130px;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }

  .swiper-button-next {
    background-image: url("https://cdn.deepsense.space/nails/assets/images/right.png");
    width: 60px;
    height: 60px;
    position: absolute;
    right: 6%;
    top: 52%;
    @media (min-width: 1224px) {
      display: none;
    }
  }

  .swiper-button-prev {
    background-image: url("https://cdn.deepsense.space/nails/assets/images/left.png");
    width: 60px;
    height: 60px;
    position: absolute;
    left: 4%;
    top: 52%;
    z-index: 10;
    @media (min-width: 1224px) {
      display: none;
    }
  }

  .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px !important;
    left: 0px;
    width: 100%;
    display: none;
    @media (min-width: 1224px) {
      display: block;
    }
  }

  .swiper-wrapper {
    @media (min-width: 1200px) {
      margin-bottom: 50px !important;
    }
  }

  .swiper-pagination-bullet-active {
    background: #5B307C !important;
    border-radius: 100px !important;
    width: 72px !important;
    height: 8px !important;
  }

  .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
    display: inline-block;
    border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
    background: #5B307C !important;
    opacity: inherit;
  }
`