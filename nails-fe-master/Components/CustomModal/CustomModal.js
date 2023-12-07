import {
    MDBBtn, MDBIcon,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
} from "mdb-react-ui-kit";
import {CustomModalContainerStyled} from "./CustomModal.styled";

const CustomModal = (props) => {
    const {show,setShowModal,toggleModal,children} = props;
    return(
        <CustomModalContainerStyled>
            <MDBModal show={show} setShow={setShowModal} tabIndex='-1' staticBackdrop  >
                <MDBModalDialog  size='lg'>
                    <MDBModalContent>
                        <MDBModalBody>
                            {children}
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </CustomModalContainerStyled>
    )
}

export default CustomModal;