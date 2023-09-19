import PropTypes from "prop-types";

import { PaginationContainer, Button } from "./Pagination.styled";

const Pagination = ({
  handlePrevPage,
  handleNextPage,
  page,
  noMoreResults,
}) => {
  return (
    <PaginationContainer>
      <Button type="button" disabled={!page} onClick={handlePrevPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M9.99984 14C9.74397 14 9.48797 13.9023 9.29297 13.707L4.29297 8.70703C3.90234 8.31641 3.90234 7.68359 4.29297 7.29297L9.29297 2.29297C9.68359 1.90234 10.3164 1.90234 10.707 2.29297C11.0977 2.68359 11.0977 3.31641 10.707 3.70703L6.41391 8L10.7077 12.2937C11.0983 12.6844 11.0983 13.3172 10.7077 13.7078C10.5123 13.9031 10.2561 14 9.99984 14Z"
            fill="currentColor"
          />
        </svg>
        Prev
      </Button>
      <Button type="button" disabled={noMoreResults} onClick={handleNextPage}>
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6.00016 2C6.25603 2 6.51203 2.09766 6.70703 2.29297L11.707 7.29297C12.0977 7.68359 12.0977 8.31641 11.707 8.70703L6.70703 13.707C6.31641 14.0977 5.68359 14.0977 5.29297 13.707C4.90234 13.3164 4.90234 12.6836 5.29297 12.293L9.58609 8L5.29234 3.70625C4.90172 3.31563 4.90172 2.68281 5.29234 2.29219C5.48766 2.09688 5.74391 2 6.00016 2Z"
            fill="currentColor"
          />
        </svg>
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;

Pagination.propTypes = {
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  noMoreResults: PropTypes.bool.isRequired,
};
