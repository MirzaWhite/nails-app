import {gql} from "@apollo/client";
export const GET_SERVICES = gql`
    query ServicesQuery {
     services(isFeatured:true,isActive:true){
        edges{
          node{
            id
            name
            mobileImage
            desktopImage        
          }
        }
     }
    }
`;