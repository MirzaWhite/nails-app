import {gql} from "@apollo/client";

export const GET_BLOGS = gql`
    query getBlogs($search:String){
        getBlogs(search:$search) {
            results {
                title
                titleSlug
                shortDescription
                featuredImageMobileUrl
                featuredImageDesktopUrl
                publishedAt
            }
        }
    }
`;