import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const LanguageSwitch = (props) => {
  const navbar = props.navbar;
  const [languageDropDown, setLanguageDropDown] = useState(false);
  const [mmLanguage, setmmLanguage] = useState(true);
  const [usLanguage, setusLanguage] = useState(true);
  const languageDropDownHandler = () => {
    setLanguageDropDown(!languageDropDown);
  };

  const changeLanguageHandler = () => {
    setmmLanguage(!mmLanguage);
    setusLanguage(!usLanguage);
    setLanguageDropDown(false);
  };
  return (
    <div class="lang-menu">
      <div class="select-field" onClick={languageDropDownHandler}>
        <div class={mmLanguage ? "selected-lang" : "selected-lang us"}>
          <p class={mmLanguage ? "mm lang-unit" : "mm change-us lang-unit"}>
            <span class={navbar ? "lang-unit active" : "lang-unit"}>
              {mmLanguage ? "Ks" : "$"}
            </span>
          </p>
        </div>
        <span class="select-arrow">
          <FontAwesomeIcon
            icon={faAngleDown}
            className={navbar ? "icon-arrow active" : "icon-arrow"}
          />
        </span>
      </div>
      <ul class={languageDropDown ? "lang-list active" : "lang-list"}>
        <li class="options" onClick={changeLanguageHandler}>
          <p class={usLanguage ? "us lang-unit" : "us change-mm lang-unit"}>
            {usLanguage ? "$" : "Ks"}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitch;
