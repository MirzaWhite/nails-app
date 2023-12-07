import { gql } from "@apollo/client";

export const GET_GALLERIES_QUERY = gql`
    query  galleries($galleryType:GalleryTypeEnum!){
        galleries(galleryType:$galleryType){
            name
            description
            galleryType
            galleryMedias {
                id
                mobileImage
                desktopImage
                hostedUrlMobile
                hostedUrlDesktop
                provider
                providerUrl
                thumbnailMobile
                thumbnailDesktop
                name
                description
                sortOrder
            }
        }
    }

`