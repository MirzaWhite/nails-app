import {gql} from "@apollo/client";
export const GET_FEATURED_PRODUCTS = gql`
    query FeaturedProductsQuery {
         searchProducts(isActive:true,isFeatured:true){
            edges{
              node{
                id
                name
                sku
                longDescription
                duration
                gallery{
                  desktopImage
                  mobileImage
                }
              }
            }
         }
    }
`;