import React from "react";
import styled from "styled-components";
import {H4} from "../../elements/Font/Font.styled";
import Image from "next/image";
import {useMediaQuery} from "react-responsive";
import dynamic from "next/dynamic";

const BlogsBanner = () => {
    const isDesktopOrLaptop = useMediaQuery({minWidth: 1224});
    return (
        <BlogsBannerStyled>
            <div className={'blogs-banner'}>
                <Image
                    src={isDesktopOrLaptop ? "https://cdn.deepsense.space/nails/assets/images/blogs-desktop-banner.svg"
                        : "https://cdn.deepsense.space/nails/assets/images/blogs-mobile-banner.svg"}
                    alt={'banner-image'}
                    width={isDesktopOrLaptop ? 1120 : 327}
                    height={isDesktopOrLaptop ? 374 : 226}
                    layout={isDesktopOrLaptop ? "intrinsic" : "responsive"}
                    className={'blogs-banner-image'}
                />
                <H4 className="blogs-title" color={"#EFEAF2"} weight={500}>
                    {"Read our Blogs".toUpperCase()}
                </H4>
            </div>
        </BlogsBannerStyled>
    )

}

export default dynamic(() => Promise.resolve(BlogsBanner), {ssr: false})


const BlogsBannerStyled = styled.div`
  padding: 24px 24px 0 24px;
  border-radius: 62px 20px;

  .blogs-banner {
    position: relative;
    text-align: center;
    color: white;
  }

  .blogs-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    font-size: 36px;
  }

  .blogs-banner-image {
    border-radius: 62px 20px;
  }

  @media (min-width: 1224px) {
    border-radius: 200px 20px;
    padding: 16px 16px 0 16px;
    .blogs-title {
      position: absolute;
      top: 40%;
      font-size: 56px;
    }

    .blogs-banner-image {
      border-radius: 200px 20px;
    }

  }

`