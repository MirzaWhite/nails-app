import { gql } from "@apollo/client";

const GET_City = gql`

query getCity(
$stateId: ID!
 ){
    citiesByState(stateId:$stateId){
        name
        id
    }
}
 `;
export default GET_City;