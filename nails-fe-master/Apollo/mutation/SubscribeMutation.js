import { gql } from '@apollo/client';

// Define mutation
const CREATE_SUBSCRIBE_MUTATION = gql`
     mutation subscribe(
        $email:String!
       
  ) {
    subscribe(email:$email){
        message
}
  }
  `
export default CREATE_SUBSCRIBE_MUTATION;