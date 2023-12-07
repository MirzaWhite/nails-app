import React from "react";
import CelebrityGallery from "../Components/CelebrityGallery/CelebrityGallery";
import Head from "next/head";
import ClientsGallery from "../Components/ClientGallery/ClientsGallery";
import Testimonials from "../Components/Testimonials/Testimonials";
import client from "../Apollo/apollo-client";
import {gql} from "@apollo/client";
const gallery = ({homepageQuery}) => {
  return (
    <div>
        <Head>
            <title>Nails Beyond</title>
        </Head>
        <CelebrityGallery />
        <ClientsGallery/>
        <Testimonials TestimonialData={homepageQuery.TestimonialData}/>
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
            query HomePage {
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

export default gallery;
