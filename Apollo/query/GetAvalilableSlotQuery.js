import {gql} from "@apollo/client";

export const GET_SLOTS = gql`
    query getslot{
       availableSlots{
         time
         id
     }
}
`;