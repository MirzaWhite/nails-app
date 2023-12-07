import {gql} from "@apollo/client";
export const GET_HERO_BANNERS = gql`
    query HeroBannersQuery {
        homeSlider{
            id
            desktopImage
            mobileImage
            hostedUrlMobile
            hostedUrlDesktop
            provider
            providerUrl
            sortOrder
        }
    }
`;