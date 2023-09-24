import logo from "src/assets/images/logo.png";

import { LogoGroup, LogoName } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoGroup>
      <img src={logo} alt="logo" />
      <LogoName>PetsPaw</LogoName>
    </LogoGroup>
  );
};

export default Logo;
