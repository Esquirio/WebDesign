import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { FaFacebook } from 'react-icons/fa';

import '../App.css';

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: '',
    };

    componentClicked = () => {
        console.log('clicked');
    };

    responseFacebook = (response) => {
        // console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
        });
    };

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <div
                    style={{
                        width: '400px',
                        margin: 'auto',
                        background: '#f4f4f4',
                        padding: '20px',
                    }}
                >
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    <h4>Email: {this.state.email}</h4>
                </div>
            );
        } else {
            fbContent = (
                <React.Fragment>
                    <FacebookLogin
                        appId="3138465706421921"
                        autoLoad={false}
                        fields="name,email,picture"
                        cssClass="facebook"
                        icon={<FaFacebook />}
                        onClick={this.componentClicked}
                        callback={this.responseFacebook}
                    />
                </React.Fragment>
            );
        }
        return <div>{fbContent}</div>;
    }
}
