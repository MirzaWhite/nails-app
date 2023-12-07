import { gql } from "@apollo/client";

const GET_CLIENTGALLERY = gql`
query Client(
$galleryType: GalleryTypeEnum!
){
  galleries(galleryType:$galleryType){
    galleryMedias {
      id
      desktopImage
      mobileImage
    }
  }
}
`;
export default GET_CLIENTGALLERY;