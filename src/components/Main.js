import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enWord: "Let's hack our education together.",
      frWord: "Hackons notre éducation ensemble."
    };
    this.INITIAL_WORD = this.state.frWord;
    this.interv = "undefined";
    this.canChange = false;
    this.globalCount = 0;
    this.count = 0;
    this.isGoing = false;
  }
  rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  getRandomLetter = () => {
    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    return alphabet[this.rand(0, alphabet.length - 1)];
  };
  getRandomWord = word => {
    const text = word;
    let finalWord = "";
    for (let i = 0; i < text.length; i++) {
      finalWord += text[i] === " " ? " " : this.getRandomLetter();
    }
    return finalWord;
  };

  mouseEnter = () => {
    if (this.isGoing) return;
    this.isGoing = true;
    let currentWord = "frWord";
    this.props.language === "fr"
      ? (currentWord = "frWord")
      : (currentWord = "enWord");

    this.INITIAL_WORD = this.state[currentWord];
    let randomWord = this.getRandomWord(this.state[currentWord]);
    this.setState({ [currentWord]: randomWord });

    this.interv = setInterval(() => {
      let finalWord = "";
      for (let x = 0; x < this.INITIAL_WORD.length; x++) {
        if (x <= this.count && this.canChange) {
          finalWord += this.INITIAL_WORD[x];
        } else {
          finalWord += this.getRandomLetter();
        }
      }
      this.setState({ [currentWord]: finalWord });

      if (this.canChange) {
        this.count++;
      }
      if (this.globalCount >= 20) {
        this.canChange = true;
      }
      if (this.count >= this.INITIAL_WORD.length) {
        clearInterval(this.interv);
        this.count = 0;
        this.canChange = false;
        this.globalCount = 0;
        this.isGoing = false;
      }
      this.globalCount++;
    }, 50);
  };

  render() {
    const { language } = this.props;
    return (
      <div>
        <h1 onMouseEnter={this.mouseEnter}>
          {language === "en" ? this.state.enWord : this.state.frWord}
        </h1>
        <p>
          {language === "en"
            ? "Stop being the victim of the educational system, join our community and hack your education with us. Collaborate on meaningful challenges and projects with others students to gain experience."
            : "Arrête d'être la victime du système éducatif, rejoins notre communauté et hack ton éducation avec nous. Collabore sur des projets et challenges avec d'autres étudiants pour gagner de l'expérience."}
        </p>
      </div>
    );
  }
}

export default Main;