import React, { Component } from "react";
 
const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;


class LanguageNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        language: "english"
      };
    }
    updateLanguage = e => this.setState({ language: e.target.value });

    render() {
        return (
            
          <LanguageContext.Provider
            value={{
              language: this.state.language,
              updateLanguage: this.updateLanguage
            }}
          >
            {this.props.children}
          </LanguageContext.Provider>
        );
      }
    }
    
    const Header = () => {
      return (
        <LanguageConsumer>
          {({ updateLanguage }) => (
            <header>
              <select onChange={updateLanguage}>
                <option value="english">EN</option>
                <option value="french">FR</option>
              </select>
            </header>
          )}
        </LanguageConsumer>
      );
    };

    const TranslatableText = props => (
      <LanguageConsumer>
        {({ language }) => props.dictionary[language]}
      </LanguageConsumer>
    );
    
class Main extends Component {      

  render() {
    return (
      <LanguageNav>
        <div>
          <Header />
          <Title />
          <p>
            <TranslatableText
              dictionary={{
                french: "Arrête d'être la victime du système éducatif, rejoins notre communauté et hack ton éducation avec nous. Collabore sur des projets et challenges avec d'autres étudiants pour gagner de l'expérience.",
                english: "Stop being the victim of the educational system, join our community and hack your education with us. Collaborate on meaningful challenges and projects with others students to gain experience."
              }}
            />
          </p>
        </div>
      </LanguageNav>
    );
  }
}

class Title extends Component {
    static contextType = LanguageContext;
    constructor(props,context) {
        super(props,context);
        this.state = {
            word_en : "Let's hack our education together.",
            word_fr : "Hackons notre éducation ensemble."
         };
        this.interv = 'undefined';
        this.canChange = false;
        this.globalCount = 0;
        this.count = 0;
        this.INITIAL_WORD = this.state.word_en;
        this.isGoing = false;
        this.mouseEnter = this.mouseEnter.bind(this);
    }
    rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomLetter() {
        let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        return alphabet[this.rand(0,alphabet.length - 1)];
    }
    getRandomWord(word) {
        const text = word;
        let finalWord = '';
        for(let i=0;i < text.length;i++) {
            finalWord += text[i] === ' ' ? ' ' : this.getRandomLetter()
    }       
    return finalWord
    }
      

    mouseEnter() {
        if(this.isGoing) return;
        this.isGoing = true;
        let randomWord = null;
        if(this.context.language === 'english') {
            randomWord = this.getRandomWord(this.state.word_en);
        } else {
            randomWord = this.getRandomWord(this.state.word_fr);
            this.INITIAL_WORD = this.state.word_fr;
        }
        this.setState(
            {word: randomWord}
            )

        this.interv = setInterval(() => {
        let finalWord = '';
        for(let x=0;x< this.INITIAL_WORD.length;x++) {
            if(x <= this.count && this.canChange) {
                finalWord += this.INITIAL_WORD[x];
            } else {
                finalWord += this.getRandomLetter();
            }
            }

        if(this.context.language === 'english') {
            this.setState(
                {word_en: finalWord}
            )
        } else {
            this.setState(
                {word_fr: finalWord}
            )
        }


        if(this.canChange) {
            this.count++;
        }
        if(this.globalCount >= 20) {
            this.canChange = true;
        }
        if(this.count>= this.INITIAL_WORD.length) {
            clearInterval(this.interv)
            this.count = 0;
            this.canChange = false;
            this.globalCount = 0;
            this.isGoing = false;
        }
        this.globalCount++;
        },50)
        
          }

   render() {
    return (
       <h1 onMouseEnter={this.mouseEnter}>
       <TranslatableText
         dictionary={{
            french: this.state.word_fr,
            english: this.state.word_en
         }}
       />
     </h1>
   );
 }
}

export default Main;