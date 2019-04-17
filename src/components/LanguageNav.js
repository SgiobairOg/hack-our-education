import React from "react";

const display = {
  fontSize:'13px'
}
const LanguageNav = props => {
  const frLang = {
    fontWeight: props.language === 'fr' ? '600' : '300',
    opacity: props.language === 'fr' ? '1' : '0.7'
  }
  const enLang = {
    fontWeight: props.language === 'en' ? '600' : '300',
    opacity: props.language === 'en' ? '1' : '0.7'
  }
  return (
    <ul id="menu-lang-switcher">
      <li><button onClick={props.handleLanguageChange} value="fr" className="btn-lang-switcher" style={frLang}>FR</button></li>
      <li style={display}>|</li>
      <li><button onClick={props.handleLanguageChange} value="en" className="btn-lang-switcher" style={enLang}>EN</button></li>
    </ul>
  );
};

export default LanguageNav;