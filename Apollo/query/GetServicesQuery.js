import { gql } from "@apollo/client";

export const GET_SERVICES_QUERY = gql`
    query Services {
        services(isFeatured: true, isActive: true) {
            edges {
                node {
                    id
                    name
                    mobileImage
                    desktopImage
                }
            }
        }
    }
`;
