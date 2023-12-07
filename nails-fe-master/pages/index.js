import HeroBanner from "../Components/HeroBanner/HeroBanner";
import Head from 'next/head'
import TopPicks from "../Components/TopPicks/TopPicks";
import PartnerBrand from "../Components/PartnerBrand/PartnerBrand";
import AboutUsShort from "../Components/AboutUsShort/AboutUsShort";
import OfferServices from "../Components/OfferServices/OfferServices";
import OurPortfolio from "../Components/OurPortfolio/OurPortfolio";
import Franchise from "../Components/Franchise/Franchise";
import Testimonials from "../Components/Testimonials/Testimonials";
import client from "../Apollo/apollo-client";
import {gql} from "@apollo/client";
import ContactUsForm from "../Components/AboutUsPageContactUs/ContactUsForm";
import React from "react";
import BestSeller from "../Components/BestSeller";
const Home =({homepageQuery})=> {

  return (
    <div>
        <Head>
            <title>Nails Beyond</title>
        </Head>
        <HeroBanner HomeBanner={homepageQuery.HomeBanner}/>
        <TopPicks TopPick={homepageQuery.TopPick}/>
        <AboutUsShort/>
        <OfferServices Services={homepageQuery.Services}/>
        <Franchise/>
        <OurPortfolio/>
        <BestSeller BestSellers={homepageQuery.BestSellers}/>
        <Testimonials TestimonialData={homepageQuery.TestimonialData}/>
        <PartnerBrand/>
        <ContactUsForm/>
    </div>
  )
}
export async function getServerSideProps({req,res}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    const {data} = await client.query({
        query: gql`
            query HomePage {
                HomeBanner:homeSlider{
                    id
                    desktopImage
                    mobileImage
                    hostedUrlMobile
                    hostedUrlDesktop
                    provider
                    providerUrl
                    sortOrder
                }
             TopPick:  searchProducts(isActive:true,isFeatured:true){
                 edges{
                     node{
                         id
                         name
                         sku
                         longDescription
                         duration
                         gallery{
                             desktopImage
                             mobileImage
                         }
                     }
                 }
             }
             
              BestSellers:  searchProducts(isActive:true,isBestSellingProduct:true){
                 edges{
                     node{
                         id
                         name
                         sku
                         longDescription
                         duration
                         gallery{
                             desktopImage
                             mobileImage
                         }
                     }
                 }
             }
             
                Services:  services(isFeatured:true,isActive:true){
                    edges{
                        node{
                            id
                            name
                            mobileImage
                            desktopImage
                        }
                    }
                }
                
                TestimonialData: testimonials(testimonialType:CLIENT){
                    id
                    mobileImage
                    desktopImage
                    name
                    role
                    description
                    rating
                    testimonialType
                    sortOrder
                }
                
                
                
            }
            
        `,
    });

    return {
        props: {
            homepageQuery: data
        },
    };
}


export default Home
