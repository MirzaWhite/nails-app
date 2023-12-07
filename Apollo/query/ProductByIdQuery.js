import {gql} from "@apollo/client";

export const GET_PRODUCT_BY_ID_QUERY = gql`
    query ProductByIdQuery (
        $productId: ID!
    ){
        productById(productId:$productId) {
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
`;