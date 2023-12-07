import React from "react";
import ProductListing from "../Components/ProductListing/ProductListing";
import Head from "next/head";



const Products = () => {
  return <div>
    <Head>
      <title>Nails Beyond</title>
    </Head>
    <ProductListing/>
  </div>;
};

export default Products;
