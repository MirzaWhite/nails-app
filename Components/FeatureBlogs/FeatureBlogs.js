import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import BlogsCard from "../BlogsCard/BlogsCard";
import {FeatureBlogsStyled} from "./FeatureBlogs.styled";
import {MDBIcon} from "mdb-react-ui-kit";
import {GET_BLOGS} from "../../Apollo/query/GetBlogsQuery";
import {useLazyQuery} from "@apollo/client";

const FeatureBlogs = () => {
    const [blogsCardData, setBlogsCardData] = useState("")
    const [searchText, setSearchText] = useState("")

    const [getBlogsData] = useLazyQuery(GET_BLOGS)

    useEffect(() => {
        GetBlogsData()
    }, [])


    const GetBlogsData = () => {
        let variables = {
            search: searchText,
        };
        getBlogsData({variables: variables})
            .then(({data}) => {
                setBlogsCardData(data?.getBlogs?.results)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <FeatureBlogsStyled>
            <div className="search-Bar">
                <input onChange={(e) => setSearchText(e.target.value)} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        GetBlogsData();
                    }
                }} type={"text"} placeholder={"Search"}
                       className="search-box"/>
                <div className="search-logo cursor-pointer">
                    <MDBIcon fas icon="search" className={"SearchLogo"}/>
                </div>
            </div>
            <div className={'blogs-cards-container'}>
                {
                    blogsCardData?.length > 0 ?

                        <>
                            {blogsCardData.map((data, index) => (
                                <BlogsCard blog={true} data={data} key={index}/>
                            ))
                            }
                        </>
                        : <p className={'no-data-found'}>NO DATA FOUND</p>
                }
            </div>
        </FeatureBlogsStyled>
    )
}

export default dynamic(() => Promise.resolve(FeatureBlogs), {ssr: false})