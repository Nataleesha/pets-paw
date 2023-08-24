import { useParams } from "react-router-dom";

import { Container } from "./BreedDetails.styled";

const BreedDetails = () => {
  const { breedId } = useParams();

  return (
    <Container>
      <p>{breedId}</p>
    </Container>
  );
};

export default BreedDetails;
