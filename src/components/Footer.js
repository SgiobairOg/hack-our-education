import React, { Component } from "react";
import Console from "./Console";

class Footer extends Component {
  render() {
    const { language } = this.props;
    const words = {
      fr: ["On hack", "On apprend", "On réussit"],
      en: ["We hack", "We learn", "We succeed"]
    };
    const colors = ["tomato", "rebeccapurple", "lightblue"];
    return (
      <footer className="footer">
        <Console words={words} language={language} colors={colors} />
        <Console
          words={words}
          language={language}
          colors={colors}
          cursorCharacter="█"
        />
      </footer>
    );
  }
}
export default Footer;
