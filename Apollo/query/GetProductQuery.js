import {gql} from "@apollo/client";

export const GET_PRODUCT_QUERY = gql`
    query productById ($productId:ID!){
        productById(productId:"$productId"){
            id
            name
            shortDescription
            longDescription
            duration
            gallery{
                id
                mobileImage
                desktopImage
            }
        }
    }
`