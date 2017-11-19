import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route, Switch} from 'react-router-dom'
import firebase from "firebase";
import LoginPage from './LoginPage';
import BookingInProgress from './component/BookingInProgress'

var config = {
    apiKey: "AIzaSyCOf4z8rA3_8xX3Vd0TviwtLy5-mQSxR14",
    authDomain: "picklinik.firebaseapp.com",
    databaseURL: "https://picklinik.firebaseio.com",
    projectId: "picklinik",
    storageBucket: "picklinik.appspot.com",
    messagingSenderId: "456708034776"
};
firebase.initializeApp(config);


ReactDOM.render(
    <HashRouter basename={'/'}>
        <Switch>
            <Route component={LoginPage} exact path={'/login'} />
            <Route component={BookingInProgress} path={'/booking'} />
            <Route component={App}/>
        </Switch>
    </HashRouter>, document.getElementById('root'));
registerServiceWorker();
