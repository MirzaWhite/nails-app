import { gql } from "@apollo/client";

const GET_Ftestimonial = gql`
query Franchise(
$testimonialType: TestimonialTypeEnum!
){
  testimonials(testimonialType:$testimonialType){
    id
    mobileImage
    desktopImage
    name
    role
    description
    rating
    testimonialType
    sortOrder
  }
}
`;
export default GET_Ftestimonial;