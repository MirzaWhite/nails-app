import {gql} from "@apollo/client";

export const GET_INDIVIDUAL_BLOG_DATA = gql`
    query getBlogs($slug:String!){
        getBlog(slug: $slug) {
            title
            body
            tags
            mainImageMobileUrl
            mainImageDesktopUrl
            publishedAt
            readTime
        }
    }
`;