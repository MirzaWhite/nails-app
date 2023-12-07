import React, {useEffect, useState} from "react";
import AboutUsBanner from "../Components/AboutUsBanner/AboutUsBanner";
import OurStory from "../Components/OurStory/OurStory";
import Testimonials from "../Components/Testimonials/Testimonials";
import Faqs from "../Components/FAQS/Faqs";
import Franchise from "../Components/Franchise/Franchise";
import ContactUsForm from "../Components/AboutUsPageContactUs/ContactUsForm";
import OfferServices from "../Components/OfferServices/OfferServices";
import Head from "next/head";
import {gql, useLazyQuery} from "@apollo/client";
import {GET_FAQS_QUERY} from "../Apollo/query/GetFaqsQuery";
import client from "../Apollo/apollo-client";
const AboutUs = ({homepageQuery}) => {
    console.log(homepageQuery.TestimonialData)
    const [faqsData, setFaqsData] = useState('')


    const [getFaqsData] = useLazyQuery(GET_FAQS_QUERY)


    useEffect(() => {
        FaqsDataApi()
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const FaqsDataApi = async () => {
        try {
            await getFaqsData({variables: {faqType:"NORMAL"}}).then(({data}) => {
                setFaqsData(data.faqSections)
            });
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <Head>
                <title>Nails Beyond</title>
            </Head>
            <AboutUsBanner/>
            <OurStory/>
            <OfferServices Services={homepageQuery.Services}/>
            <Testimonials TestimonialData={homepageQuery.TestimonialData}/>
            <Franchise/>
            <Faqs faqsData={faqsData}/>
            <ContactUsForm/>
        </div>
    );
};


export async function getServerSideProps({req,res}) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    const {data} = await client.query({
        query: gql`
            query aboutPage {
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


export default AboutUs;
