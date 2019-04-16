import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import Contact from "./Contact";
//import AppLanguage from "./LanguageNav";
import "./index.css";


class App extends Component {
  render() {
    return (
      <div>
        <Main/>
        <Contact/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, 
  document.getElementById("root")
);
