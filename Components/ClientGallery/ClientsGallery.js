import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive';
import {useState,useEffect} from "react";
import {useLazyQuery} from "@apollo/client";
import { H6, B2 } from "../../elements/Font/Font.styled";
// import Swiper core and required modules
import { useRef } from 'react'
import { Pagination, } from 'swiper';
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import GET_CLIENTGALLERY from "../../Apollo/query/GetClientGallery";

const ClientsGallery = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width:1024px)", });
    const Desktop = useMediaQuery({ query: "(min-width:1224px)", });
    const [imageError, setImageError] = useState(false);
    const [imageError1, setImageError1] = useState(false);
    const [imageError2, setImageError2] = useState(false);
    const [imageError3, setImageError3] = useState(false);
    const [imageError4, setImageError4] = useState(false);
    const [imageError5, setImageError5] = useState(false);
    const [imageError6, setImageError6] = useState(false);


    const [clientdata, setClientdata] = useState([]);
    const [getClientData] = useLazyQuery(GET_CLIENTGALLERY);
    const handleImageError = (Count) => {
        if(Count === 0){
            setImageError(true);
        }
        if(Count === 1){
            setImageError1(true);
        }
        if(Count === 2){
            setImageError2(true);
        }
        if(Count === 3){
            setImageError3(true);
        }
        if(Count === 4){
            setImageError4(true);
        }
        if(Count === 5){
            setImageError5(true);
        }
        if(Count === 6){
            setImageError6(true);
        }

    };

    function ApiProduct() {
        try {
            getClientData({variables: {galleryType:"CLIENT"}}).then(({data, errors}) => {
                if (data) {
                    setClientdata(data.galleries[0].galleryMedias)
                    console.log(data.galleries[0].galleryMedias,"yes")
                }
            });
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        ApiProduct()
        return()=>{

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const tempArr = clientdata
    const clientDetails = []
    for (let i = 0; i < tempArr.length; i += 7) {
        clientDetails.push(tempArr.slice(i, i + 7));
    }
    console.log(clientDetails,"why")


    return (
        <>
            {  clientDetails.length>0 &&
                <ClientsGallerysStyle>
                <div className='text-center'>
                    <H6 color={'#5B307C'} weight={500} className={'title mb-2'}>Clients Gallery</H6>
                    <B2 color={'#384955'} weight={400} className={'sub-title mb-4'}>A showcase of some of our most
                        favourite looks we have created for our clients</B2>
                </div>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    initialSlide={0}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {
                        clientDetails?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='Clientsgallery'>
                                        {
                                            Desktop &&
                                            <div className='mobile-image'>
                                                <Image className="client-image" src={imageError ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : item[0].mobileImage}
                                                       alt={'gallery1'} layout={"fixed"}
                                                       width={218}
                                                       height={320}
                                                       onError={()=>handleImageError(0)}
                                                >
                                                </Image>
                                            </div>
                                        }
                                        <div className='two-image'>
                                            <Image className="client-image"
                                                   src={imageError1 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[1].desktopImage : item[1].mobileImage}
                                                   alt={'gallery2'} layout={"fixed"}
                                                   width={isDesktopOrLaptop ? 216 : 90}
                                                   height={isDesktopOrLaptop ? 140 : 60}
                                                   onError={()=>handleImageError(1)}
                                            >
                                            </Image>
                                            <Image className="client-image"
                                                   src={imageError2 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[2].desktopImage : item[2].mobileImage}
                                                   alt={'gallery3'} layout={"fixed"}
                                                   width={isDesktopOrLaptop ? 216 : 90}
                                                   height={isDesktopOrLaptop ? 224 : 94}
                                                   onError={()=>handleImageError(2)}
                                            >
                                            </Image>
                                        </div>
                                        <Image className="client-image"
                                               src={imageError3 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[3].desktopImage : item[3].mobileImage}
                                               alt={'gallery4'} layout={"fixed"}
                                               width={isDesktopOrLaptop ? 305 : 130}
                                               height={isDesktopOrLaptop ? 488 : 202}
                                               onError={()=>handleImageError(3)}
                                        >
                                        </Image>
                                        <div className='two-image'>
                                            <Image className="client-image"
                                                   src={imageError4 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[4].desktopImage : item[4].mobileImage}
                                                   alt={'gallery2'} layout={"fixed"}
                                                   width={isDesktopOrLaptop ? 216 : 90}
                                                   height={isDesktopOrLaptop ? 140 : 60}
                                                   onError={()=>handleImageError(4)}
                                            >
                                            </Image>
                                            <Image className="client-image"
                                                   src={imageError5 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[5].desktopImage : item[5].mobileImage}
                                                   alt={'gallery3'} layout={"fixed"}
                                                   width={isDesktopOrLaptop ? 216 : 90}
                                                   height={isDesktopOrLaptop ? 224 : 94}
                                                   onError={()=>handleImageError(5)}
                                            >
                                            </Image>
                                        </div>
                                        {
                                            Desktop &&
                                            <div className='mobile-image'>
                                                <Image className="client-image"
                                                       src={imageError6 ? "https://cdn.deepsense.space/nails/assets/images/ClientDummy.png" : Desktop ? item[6].desktopImage : item[6].mobileImage}
                                                       alt={'gallery1'} layout={"fixed"}
                                                       width={218}
                                                       height={320}
                                                       onError={()=>handleImageError(6)}
                                                >
                                                </Image>
                                            </div>
                                        }
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </ClientsGallerysStyle>}
        </>
    )
}

export default ClientsGallery;


const ClientsGallerysStyle = styled.div`
padding:24px;
@media (min-width: 1200px) {
    width:93%;
    padding: 60px 0px;
    margin:0px auto;
}

.Clientsgallery{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    @media (min-width: 767px) {
        gap: 28px;
        margin-bottom: 40px;
    }
}
.two-image{
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (min-width: 767px) {
        gap: 28px;
    }
}
.swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: #5B307C;
    width:200px !important;
    height:6px !important;
    border-radius: 1px !important;
}
.swiper-pagination-bullet {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: #5B307C !important;
}
.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    width: 400px !important;
    transform: translateX(-50%);
    white-space: nowrap;
}
.sub-title{
    @media (min-width: 1000px) {
        margin: 0px auto;
        width:40%;
    }
}
  .client-image{
    border-radius: 16px !important;
  }
  
`