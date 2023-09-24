import { useState, useEffect } from "react";
import { Switch } from "./ThemeSwitcher.styled";

const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState(
    JSON.parse(localStorage.themeIsDark) || false
  );

  if (isChecked) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }

  useEffect(() => {
    localStorage.setItem("themeIsDark", isChecked);
  }, [isChecked]);

  const handleSwitchToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Switch>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleSwitchToggle}
      />
      <span></span>
    </Switch>
  );
};

export default ThemeSwitcher;
