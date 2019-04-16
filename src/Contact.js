import React, { Component } from "react";

class Contact extends Component {

    render() {
        return(
            <div id='sent-button'>
                <a href="https://join.slack.com/t/tacklechallenges/shared_invite/enQtNTk0NjAzNjIyNDE4LWE4YzIzYmFjN2U5ZTcwN2JlYjUzZGI0N2I1ZDk3OGQ2MzNlZDgwN2E2NDdkMzExZGM0NmViNzI5NmI1YWMyYzA">
                    <span id='sent-text'>Join our community</span>
                </a>
            </div>
        );
    }
}

export default Contact;