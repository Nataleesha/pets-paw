import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";

import {
  Container,
  InnerContainer,
  ButtonClose,
  Title,
  Notice,
  Link,
  Uploader,
  Span,
  ImagePlaceholder,
  Image,
  UploadButton,
} from "./UploadModal.styled";

const UploadModal = ({ toggleModal }) => {
  const [file, setFile] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      const acceptedFile = acceptedFiles[0];
      Object.assign(acceptedFile, {
        preview: URL.createObjectURL(acceptedFile),
      });
      setFile(acceptedFile);
    },
  });

  useEffect(() => {
    console.log(file);
    return () => (file) => URL.revokeObjectURL(file.preview);
  }, [file]);

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
        <Title>Upload a .jpg or .png Cat Images</Title>
        <Notice>
          Any uploads must comply with the{" "}
          <Link
            href="https://thecatapi.com/privacy"
            rel="noopener noreferrer"
            target="_blank"
          >
            upload guidelines
          </Link>{" "}
          or face deletion.
        </Notice>
        <Uploader {...getRootProps({ className: "dropzone" })}>
          <Notice style={{ margin: "0" }}>
            <Span>Drag here</Span> your file or
          </Notice>
          <Notice style={{ margin: "0" }}>
            {" "}
            <Span>Click here</Span> to upload
          </Notice>
          <input
            {...getInputProps()}
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
          />
          {file && (
            <ImagePlaceholder>
              <Image src={file.preview} />
            </ImagePlaceholder>
          )}
        </Uploader>
        {!file ? (
          <Notice>No file selected</Notice>
        ) : (
          <>
            <Notice>Image File Name: {file.name}</Notice>
            <UploadButton type="button">Upload photo</UploadButton>
          </>
        )}
      </InnerContainer>
    </Container>
  );
};

export default UploadModal;

UploadModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
