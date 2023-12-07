import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import IndividualBlog from "../Components/IndividualBlog/IndividualBlog";

const Blogs = () => {

    return (
        <div>
            <Head>
                <title>Nails Beyond</title>
            </Head>
            <IndividualBlog/>
        </div>
    );
};


export default dynamic(() => Promise.resolve(Blogs), {ssr: false})