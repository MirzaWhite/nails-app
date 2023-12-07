import { gql } from '@apollo/client';

// Define mutation
const CREATE_FRANCHISE_MUTATION = gql`
    mutation contactUs(
        $cityId: ID
        $email: String
        $formType: ContactFormEnum!
        $message: String
        $name: String!
        $phoneNumber: String!
        $stateId: ID
    ) {
        contactUs(cityId:$cityId,email:$email,formType:$formType,message:$message,name:$name,phoneNumber:$phoneNumber,stateId:$stateId){
            message
        }
    }
`
export default CREATE_FRANCHISE_MUTATION;