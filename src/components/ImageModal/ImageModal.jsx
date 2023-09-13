import { Container, Image } from "./ImageModal.styled";
import PropTypes from "prop-types";

const ImageModal = ({ closeModal, image }) => {
  return (
    <Container onClick={closeModal}>
      <Image src={image} />
    </Container>
  );
};

export default ImageModal;

ImageModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
