import { Container, InnerContainer, ButtonClose } from "./Modal.styled";
import PropTypes from "prop-types";

import Navigation from "src/components/Navigation/Navigation";

const Modal = ({ toggleModal }) => {
  return (
    <Container>
      <InnerContainer>
        <ButtonClose type="button" onClick={toggleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.05691 8.99997L0.52832 1.47137L1.47113 0.528564L8.99972 8.05716L16.5283 0.528564L17.4711 1.47137L9.94253 8.99997L17.4711 16.5286L16.5283 17.4714L8.99972 9.94278L1.47113 17.4714L0.52832 16.5286L8.05691 8.99997Z"
              fill="currentColor"
            />
          </svg>
        </ButtonClose>
        <Navigation />
      </InnerContainer>
    </Container>
  );
};

export default Modal;

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
