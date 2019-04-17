import React, { Component } from "react";
import Main from "./components/Main";
import Contact from "./components/Contact";
import LanguageNav from "./components/LanguageNav";
import Footer from "./components/Footer"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "fr"
    };
  }

  handleLanguageChange = event => {
    this.setState({ language: event.target.value });
  };
  render() {
    return (
      <div>
        <LanguageNav handleLanguageChange={this.handleLanguageChange} language={this.state.language}/>
        <Main language={this.state.language} />
        <Contact />
        <Footer language={this.state.language}/>
      </div>
    );
  }
}

export default App;