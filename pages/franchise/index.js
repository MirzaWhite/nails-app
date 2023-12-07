import React, {useEffect, useState} from 'react'
import AboutUsBannerStyled from '../../Components/AboutUsBanner/AboutUsBanner'
import Eligibility from "../../Components/Eligibility/Eligibility";
import FranchiseTestimonials from "../../Components/FranchiseTestimonials/FranchiseTestimonial";
import FranchiseContact from "../../Components/FranchiseContactUs/FranchiseContact";
import Faqs from "../../Components/FAQS/Faqs";
import Head from "next/head";
import {useLazyQuery} from "@apollo/client";
import {GET_FAQS_QUERY} from "../../Apollo/query/GetFaqsQuery";
import {useMediaQuery} from "react-responsive";
import OfferServices from "../../Components/OfferServices/OfferServices";
import client from "../../Apollo/apollo-client";
import {gql} from "@apollo/client";

const Franchise = ({homepageQuery}) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const [faqsData, setFaqsData] = useState(null)
    const [getFaqsData] = useLazyQuery(GET_FAQS_QUERY)

    useEffect(() => {
        FaqsDataApi()
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const FaqsDataApi = async () => {
        try {
            await getFaqsData({variables: {faqType: "FRANCHISE"}}).then(({data}) => {
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
            <AboutUsBannerStyled CTALink={"#franchiseForm"} CTAName={"Get Started"}
                                 picture={isDesktopOrLaptop ? "https://cdn.deepsense.space/nails/assets/images/FranchiseDesktop.webp" : "https://cdn.deepsense.space/nails/assets/images/FranchiseMobile.webp"}
                                 Title={"Join Our Successful Franchise Family Today!"}
                                 Description={"Welcome Nails’n Beyond salon franchise page! We are excited to offer you the opportunity to join our successful brand and become a part of our growing family. At our salons," +
                                     " we are passionate about providing high-quality nail art and eyebrow services to our clients. "}/>
            {/*<BusinessNextLevel/>*/}
            <OfferServices Services={homepageQuery.Services}/>
            <Eligibility/>
            <FranchiseTestimonials/>
            {
                faqsData?.length >0 && <Faqs faqsData={faqsData}  />
            }
            <FranchiseContact/>
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
            query franchisePage {
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
            }

        `,
    });

    return {
        props: {
            homepageQuery: data
        },
    };

}

export default Franchise