import { gql } from "@apollo/client";

export const GET_STORES_QUERY = gql`
    query stores($fullAddress_Icontains:String){
        stores(fullAddress_Icontains:$fullAddress_Icontains){
            edges{
                node{
                    id
                    name
                    addressLine1
                    addressLine2
                    landmark
                    area
                    phoneNumber
                    pincode
                    email
                    coordinate
                    fullAddress
                    state {
                        name
                        id
                    }
                    city {
                        id
                        name
                    }
                }
            }
        }
    }

`