import { gql } from "@apollo/client";

const GET_State = gql`

query getState {
    states{
        name
        id
    }
}
 `;
export default GET_State;