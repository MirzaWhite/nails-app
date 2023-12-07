import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import dynamic from "next/dynamic";
import Image from "next/image";
import {B1, B2} from "../../elements/Font/Font.styled";
import styled from "styled-components";
import {useRouter} from "next/router";
import {BlogDate} from "../../elements/utils";

const BlogsCard = (props) => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    const router = useRouter()

    const [blogsCardData, setBlogsCardData] = useState("")


    useEffect(() => {
        setBlogsCardData(props.data)

    }, [props.data])


    return (<>
        <BlogsCardStyled onClick={() => router.push(`${blogsCardData.titleSlug}`)}>
            <div className={props.blog ? "blog-card blog-card-container" :"blog-card-container"}>
                <Image
                    src={isDesktopOrLaptop ? blogsCardData.featuredImageDesktopUrl : blogsCardData.featuredImageMobileUrl}
                    alt={'blogs-image'} width={isDesktopOrLaptop ? 310 : 302}
                    height={isDesktopOrLaptop ? 280 : 273}
                    className={'feature-image'}
                />

                <B2 className={'blogs-created-at'} color={"#6C757D"}
                    weight={400}>{BlogDate(blogsCardData?.publishedAt)?.slice(6, 8) + "." +
                    BlogDate(blogsCardData?.publishedAt)?.slice(4, 6) + "." +
                    BlogDate(blogsCardData?.publishedAt)?.slice(0, 4)}
                </B2>
                <B1 className={"blog-card-title"} color={"#495057"} weight={600}>{blogsCardData.title}</B1>
                <B2 color={"#6C757D"} weight={400}>{blogsCardData.shortDescription}</B2>
            </div>
        </BlogsCardStyled>
    </>)

}
export default dynamic(() => Promise.resolve(BlogsCard), {ssr: false})


export const BlogsCardStyled = styled.div`

  .blog-card-container {
    cursor: pointer;
    box-shadow: 0 8px 15px 0 #D1C6DB;
    background: #FFFFFF;
    max-width: 326px;
    width: 100%;
    padding: 11px;
    border-radius: 39px 12px;
    height: 460px;
    margin: 10px auto;
    border-collapse: collapse;
  }


  .feature-image {
    border-radius: 38px 11px;
  }

  .blogs-created-at {
    padding: 8px 0 0 0;
  }

  .blog-card-title {
    padding: 15px 0 11px 0;
  }

  .blog-card {
    margin: 10px 0;
  }

  @media (min-width: 1224px) {
    .blog-card-container {
      max-width: 334px;
      height: 482px;
      padding: 12px;
      border-radius: 42px 16px;
      box-shadow: 0 8px 16px 0 #D1C6DB;
      margin: 0 auto 19px auto;
    }

  }
`



