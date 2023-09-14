import { Oval } from "react-loader-spinner";

import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <Oval
        weight={40}
        width={40}
        color="#ff868e"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ff868e"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </LoaderContainer>
  );
};

export default Loader;
