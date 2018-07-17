import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route, browserHistory } from "react-router";
// import { firebaseApp } from './firebase'


// If we used firebase
// firebaseApp.auth().onAuthStateChanged(user => {
//   if(user) {
//     console.log('user has signed in or up', user);
//   } else {
//     console.log('user has signed out or still needs to sign in.')
//   }
// })

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
