import {gql} from "@apollo/client";
export const GET_BRANDS_QUERY = gql`
    query brands {
        brands {
            id
            name
        }
    }
`;