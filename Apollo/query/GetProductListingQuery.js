import {gql} from "@apollo/client";

export const GET_PRODUCT_LISTING_QUERY = gql`
    query Products (
        $end:Int
        $serviceIds: [String]
        $categoryIds: [String]
        $brandIds: [String]
    ){
        products(categoryIds:$categoryIds,brandIds:$brandIds,serviceIds:$serviceIds,end:$end, paginationValue:12) {
            totalCount
            pageRange
            serviceFilterData{
                id
                name
            }
            categoryFilterData{
                id
                name
            }
            brandFilterData{
                id
                name
            }
            productData {
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
`;
