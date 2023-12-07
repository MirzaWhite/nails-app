import { gql } from "@apollo/client";

export const GET_FAQS_QUERY = gql`
    query faqSections($faqType:FAQSectionTypeEnum!){
        faqSections(faqType:$faqType){
            question
            answer
            sortOrder
            faqType
            id
        }
    }
    
    `