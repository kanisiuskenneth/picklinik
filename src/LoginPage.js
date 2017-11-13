import React from 'react';
import './App.css';
import {grey50} from 'material-ui/styles/colors'
import logo from './res/images/logo.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey50,
    },
});



class LoginPage extends React.Component {
    state = {
        emailValue: "",
        passValue: "",
        emailErrorText: "",
        passErrorText: "",
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
               this.props.history.push("/")
            } else {

            }

        });
    }

    handleEmail = (e,value) => {
        this.setState({emailValue: value})
    };


    handlePassword = (e,value) => {
        this.setState({passValue: value})
    };

    addError = () => {
        console.log("this calld");
       this.setState({emailErrorText: " ", passErrorText: "Kombinasi email dan password salah"})
    }

    handleLogin = () => {

        firebase.auth().signInWithEmailAndPassword(this.state.emailValue, this.state.passValue).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            this.addError();
            // ...
        });
    };

    render() {
        return(

            <div className={'login-page'}>
                <div className="one-row">
                    &nbsp;
                </div>
                <img src={logo} alt="" className="logo-container"/>
                <div className="title">Picklinik</div>
                <div className="one-row" />
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className={"inner-grid"}>
                    <TextField
                        className="one-row"
                        hintText="Email"
                        hintStyle={{color: '#e0e0e0'}}
                        inputStyle={{color: 'white'}}
                        errorStyle={{color: "#a00"}}
                        errorText={this.state.emailErrorText}
                        onChange={this.handleEmail}
                    />
                    <TextField
                        inputStyle={{color: 'white'}}
                        className="one-row"
                        hintText="Password"
                        hintStyle={{color: '#e0e0e0'}}
                        errorText={this.state.passErrorText}
                        errorStyle={{color: "#a00"}}
                        onChange={this.handlePassword}
                        type='password'
                    />
                    <div className={"one-row"} />
                    <RaisedButton label="Login"  className={"one-row"} onClick={this.handleLogin}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default LoginPage;