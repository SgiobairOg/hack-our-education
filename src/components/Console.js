import React, { Component } from "react";

import "./Console.css";

class Console extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.cursorCharacter = props.cursorCharacter || "_";
    this.language = props.language || "en";
    this.wordBank = props.words[this.language];
    this.wordIndex = 0;
    this.colorBank = props.colors;
    this.text = React.createRef();
    this.intervalMin = 150;
    this.intervalMax = 400;
    this.characterDelay = 110;
    this.restartDelay = 7000;
  }

  componentDidMount() {
    this.letterCount = 0;
    setTimeout(
      this.typeWord,
      this.getRandomInterval(this.intervalMin, this.intervalMax)
    );
  }

  componentDidUpdate(oldProps, newProps) {
    console.table(oldProps);
    console.table(newProps);
    console.log("end");
  }

  getRandomInterval = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  typeWord = () => {
    this.letterCount = this.text.current.textContent.length + 1;
    const word = this.wordBank[this.wordIndex];

    if (!word) {
      this.wordIndex = 0;
      return setTimeout(this.typeWord, this.restartDelay);
    }

    this.text.current.textContent = word.slice(0, this.letterCount);

    if (this.letterCount === word.length) {
      return setTimeout(this.deleteWord, this.characterDelay * word.length);
    } else {
      return setTimeout(
        this.typeWord,
        this.getRandomInterval(this.intervalMin, this.intervalMax)
      );
    }
  };

  deleteWord = () => {
    this.letterCount = this.text.current.textContent.length - 1;

    this.text.current.textContent = this.text.current.textContent.slice(
      0,
      this.letterCount
    );

    if (this.letterCount <= 0) {
      this.wordIndex++;
      return setTimeout(
        this.typeWord,
        this.getRandomInterval(this.intervalMin, this.intervalMax)
      );
    } else {
      return setTimeout(
        this.deleteWord,
        this.getRandomInterval(this.intervalMin, this.intervalMax)
      );
    }
  };

  render() {
    return (
      <div className="console">
        <span className="console__text" ref={this.text} />
        <span className="cursor">{this.cursorCharacter}</span>
      </div>
    );
  }
}
export default Console;
