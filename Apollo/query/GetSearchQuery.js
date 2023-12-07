import {gql} from "@apollo/client";



export const GET_SEARCH_PRODUCTS = gql`
    query Search ($isActive:Boolean,$name_Istartswith:String){
        searchProducts(isActive:$isActive,name_Istartswith:$name_Istartswith) {
            edges {
                node {
                    id
                    name
                    sku
                    gallery {
                        id
                        mobileImage
                        desktopImage
                    }
                    shortDescription
                    longDescription
                    duration
                }
            }
        }
    }
`;