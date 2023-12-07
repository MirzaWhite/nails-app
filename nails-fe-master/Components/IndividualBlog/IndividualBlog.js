import {useMediaQuery} from "react-responsive";
import {IndividualBlogStyled} from "./IndividualBlog.styled";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {B2, B3, H6} from "../../elements/Font/Font.styled";
import RelatedBlog from "../RelatedBlog/RelatedBlog";
import {useLazyQuery} from "@apollo/client";
import {GET_INDIVIDUAL_BLOG_DATA} from "../../Apollo/query/GetIndividualBlogQuery";
import {useRouter} from "next/router";
import Output from "editorjs-react-renderer";
import {BlogDate} from "../../elements/utils";


const IndividualBlog = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const router = useRouter().asPath.replace("/", "")
    const [individualBLogData, setIndividualBLogData] = useState({})
    const [getIndividualBlogsData] = useLazyQuery(GET_INDIVIDUAL_BLOG_DATA)

    useEffect(() => {
        GetIndividualBlogsData()
    }, [router])

    const GetIndividualBlogsData = () => {
        let variables = {
            slug: router,
        };
        getIndividualBlogsData({variables: variables})
            .then(({data}) => {
                setIndividualBLogData(data?.getBlog)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const convertEditorJsTexToHtml = (data) => {
        if (data) {
            return (JSON?.parse(data))
        } else {
            return ("")
        }
    }


    return (
        <IndividualBlogStyled>
            {individualBLogData !== undefined && individualBLogData !== null && Object.keys(individualBLogData).length > 0 &&
                <>
                    <div className={'blog-banner'}>
                        <Image
                            src={isDesktopOrLaptop ? individualBLogData?.mainImageDesktopUrl : individualBLogData?.mainImageMobileUrl}
                            alt={"individual-blog"}
                            width={1196}
                            height={isDesktopOrLaptop ? 502 : 200}
                            layout={"intrinsic"}
                            className="individual-banner-image"
                        />
                    </div>

                    <div className={'description-section'}>
                        <div className={'left-side'}>
                            <div className={'date-time'}>
                                <B2 color={"#495057"} weight={400}
                                    className={""}>{BlogDate(individualBLogData?.publishedAt)?.slice(6, 8) + "." +
                                    BlogDate(individualBLogData?.publishedAt)?.slice(4, 6) + "." +
                                    BlogDate(individualBLogData?.publishedAt)?.slice(0, 4)}</B2>
                                <div className={'line'}></div>
                                {
                                    individualBLogData?.readTime &&
                                    <B2 color={"#495057"} weight={400}
                                        className={""}>{individualBLogData?.readTime} minutes</B2>
                                }

                            </div>
                            {(isDesktopOrLaptop && individualBLogData?.tags?.length > 0) &&
                                <div className={'tags-section'}>
                                    {individualBLogData?.tags?.map((data, index) => (
                                        <B3 color={'#495057'} weight={500} className={'tags'} key={index}>
                                            {data}
                                        </B3>
                                    ))

                                    }
                                </div>}
                        </div>
                        <div className={'right-side'}>
                            <H6 className={'title'}>
                                {individualBLogData?.title}
                            </H6>

                            <section className={'individual-blog-description'}>
                                <Output data={convertEditorJsTexToHtml(individualBLogData?.body)}/>
                            </section>
                        </div>
                    </div>
                </>
            }
            <RelatedBlog/>
        </IndividualBlogStyled>
    )
}

export default IndividualBlog;