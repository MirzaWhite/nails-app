import {useMediaQuery} from "react-responsive";
import React, {useEffect, useRef, useState} from "react";
import {RelatedBlogStyled} from "./RelatedBlog.styled";
import {H6} from "../../elements/Font/Font.styled";
import {Swiper, SwiperSlide} from "swiper/react";
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";
import BlogsCard from "../BlogsCard/BlogsCard";
import {useLazyQuery} from "@apollo/client";
import {GET_BLOGS} from "../../Apollo/query/GetBlogsQuery";

const RelatedBlog = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const swiperRef = useRef();
    const [blogsCardData, setBlogsCardData] = useState("")
    const [getBlogsData] = useLazyQuery(GET_BLOGS)


    const GetBlogsData = () => {
        getBlogsData({variables: ""})
            .then(({data}) => {
                setBlogsCardData(data?.getBlogs?.results)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        GetBlogsData()
    }, [])


    return (<>
            {blogsCardData?.length > 0 &&
                <RelatedBlogStyled>
                    <H6 weight={500} className={"title"}>Related Posts</H6>
                    <div className={"swiper-container position-relative"}>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                1224: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                    loop: blogsCardData?.length >= 5 ? true : false,
                                    centeredSlides: blogsCardData?.length >= 5 ? true : false,
                                }
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            <>
                                {blogsCardData?.map((data, index) => (
                                    <SwiperSlide key={index}>
                                        <BlogsCard data={data}/>
                                    </SwiperSlide>))}
                            </>
                        </Swiper>

                        {
                            !isDesktopOrLaptop && blogsCardData.length > 1 &&
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
                        {
                            isDesktopOrLaptop && blogsCardData.length > 3 &&
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

                </RelatedBlogStyled>}
        </>
    )
}

export default RelatedBlog;