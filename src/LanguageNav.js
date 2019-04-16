import React, { Component } from "react";


const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;


class LanguageNav extends Component {
    state = {
        language: "french"
      };
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
              see this site in
              <select onChange={updateLanguage}>
                <option value="french">french</option>
                <option value="english">english</option>
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
    
    const AppLanguage = () => (
      <LanguageNav>
        <div>
          <Header />
          <h1>
            <TranslatableText
              dictionary={{
                french: "Hackons notre éducation ensemble.",
                english: "Let's hack our education together..."
              }}
            />
          </h1>
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

export default AppLanguage;
