import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";

import { uploadImage } from "src/utils/api";
import { Oval } from "react-loader-spinner";

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
  StatusMessage,
  StatusButton,
} from "./UploadModal.styled";

const UploadModal = ({ toggleModal }) => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [pending, setPending] = useState(false);

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
      setStatus(null);
    },
  });

  useEffect(() => {
    return () => (file) => URL.revokeObjectURL(file.preview);
  }, [file]);

  const sendImage = async () => {
    setPending(true);
    const formData = new FormData();
    formData.append("file", file);
    const res = await uploadImage("images/upload", formData);

    if (res) {
      setStatus("approved");
    } else {
      setStatus("error");
    }
    setPending(false);
  };

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
            {!pending ? (
              <UploadButton type="button" onClick={sendImage}>
                Upload photo
              </UploadButton>
            ) : (
              <UploadButton
                disabled={true}
                style={{
                  cursor: "default",
                  hover: "disabled",
                  pointerEvents: "none",
                }}
              >
                {" "}
                <Oval
                  width={20}
                  height={20}
                  strokeWidth={5}
                  strokeWidthSecondary={5}
                  secondaryColor="#fbe0dc"
                  color="#fff"
                />{" "}
                Uploading
              </UploadButton>
            )}
          </>
        )}
        {status && !pending && (
          <StatusMessage>
            {status === "approved" && (
              <>
                <StatusButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM15.1872 7.08313L9.42904 14.2809L4.90654 10.5121L5.76012 9.48785L9.23763 12.3858L14.1461 6.2502L15.1872 7.08313Z"
                      fill="#97EAB9"
                    />
                  </svg>
                </StatusButton>
                <p>Thanks for the Upload - Cat found!</p>
              </>
            )}
            {status === "error" && (
              <>
                <StatusButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z"
                      fill="#FF868E"
                    />
                  </svg>
                </StatusButton>
                <p>No Cat found - try a different one</p>
              </>
            )}
          </StatusMessage>
        )}
      </InnerContainer>
    </Container>
  );
};

export default UploadModal;

UploadModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
