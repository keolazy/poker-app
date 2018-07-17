import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// https://www.youtube.com/watch?v=JqVCR0Nk7cg for Routing 
// import { Router, Route, browserHistory } from "react-router";


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
