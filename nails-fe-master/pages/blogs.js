import React from "react";
import Head from "next/head";
import BlogsBanner from "../Components/BlogsBanner/BlogsBanner";
import FeatureBlogs from "../Components/FeatureBlogs/FeatureBlogs";
import dynamic from "next/dynamic";

const Blogs = () => {

    return (
        <div>
            <Head>
                <title>Nails Beyond</title>
            </Head>
            <BlogsBanner/>
            <FeatureBlogs/>
        </div>
    );
};


export default dynamic(() => Promise.resolve(Blogs), {ssr: false})