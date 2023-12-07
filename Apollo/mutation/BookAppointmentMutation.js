import { gql } from '@apollo/client';

// Define mutation
const BOOK_APPOINTMENT_MUTATION = gql`
     mutation BookAppointmentMutation(
        $bookingType: BookingTypeEnum!,
        $date: String!,
        $email: String!,
        $name: String!,
        $phoneNumber: String!,
        $productId: ID,
        $serviceIds: [ID],
        $storeId: ID!,
        $timeId: ID!
     ) {
         bookAppointment(
           bookingType:$bookingType,
           date:$date,
           email:$email,
           name:$name,
           phoneNumber:$phoneNumber,
           serviceIds:$serviceIds,
           storeId:$storeId,
           timeId:$timeId,
           productId:$productId
         ){
          message
        }
 }
  `
export default BOOK_APPOINTMENT_MUTATION;