import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
    <div className="lang-menu">
      <div className="select-field" onClick={languageDropDownHandler}>
        <div className={mmLanguage ? "selected-lang" : "selected-lang us"}>
          <p className={mmLanguage ? "mm lang-unit" : "mm change-us lang-unit"}>
            <span className={navbar ? "lang-unit active" : "lang-unit"}>
              {mmLanguage ? "Ks" : "$"}
            </span>
          </p>
        </div>
        <span className="select-arrow">
          <FontAwesomeIcon
            icon={faAngleDown}
            className={navbar ? "icon-arrow active" : "icon-arrow"}
          />
        </span>
      </div>
      <ul className={languageDropDown ? "lang-list active" : "lang-list"}>
        <li className="options" onClick={changeLanguageHandler}>
          <p className={usLanguage ? "us lang-unit" : "us change-mm lang-unit"}>
            {usLanguage ? "$" : "Ks"}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitch;
