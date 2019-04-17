import React, { Component } from "react";


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            colors : '#fff',
            className : 'console-underscore'
        };
        this.text = React.createRef();
        this.console = React.createRef();
    }
    consoleText(words, colors) {
    if (colors === undefined) colors = ['#fff'];
    let visible = true;

    let letterCount = 1;
    let x = 1;
    let waiting = false;    
    let target = this.text;
    console.log(target)
    //target.setAttribute('style', 'color:' + colors[0])
    this.interv = setInterval(() => {

        if (letterCount === 0 && waiting === false) {
        waiting = true;

        target = words[0].substring(0, letterCount)
        this.setState({
            text: target
        });
        this.timeout = setTimeout(() => {
            //let usedColor = colors.shift();
            //colors.push(usedColor);
            let usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            //target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
        }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        this.timeout = setTimeout(() => {
            x = -1;
            letterCount += x;
            waiting = false;
        }, 1000);
        } else if (waiting === false) {

        target = words[0].substring(0, letterCount)
        this.setState({
            text: target
        });
        letterCount += x;
        }
    }, 120)
    this.interv = setInterval(() => {
        if (visible === true) {
        this.setState({
            className: 'console-underscore hidden',
        });
        visible = false;

        } else {
        this.setState({
            className: 'console-underscore',
        });

        visible = true;
        }
    }, 400);
    }
    render() {
        const { language } = this.props; 
        const words = language === 'fr' ? ['On hack', 'On apprend', 'On réussit'] : ['We hack', 'We learn', 'We succeed'];
        const colors = ['tomato','rebeccapurple','lightblue'];
        return(
            <div className="console-container">
                <span ref={this.text}>
                    <div className={this.state.className} ref={this.console}>
                        {this.state.text} &#95;
                    </div>
                </span>
                {this.consoleText(words,colors)}
            </div>

        );
    }
}
export default Footer;