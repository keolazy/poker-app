import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Router, Route } from "react-router";
// import UserSignup from "./components/UserSignup";
// import Home from "./components/Home";
// import UserLogin from "./components/UserLogin";
// import Dashboard from "./components/Dashboard";
// import Contact from "./components/Contact";

// const Root = () => {
//   return (
//     <div className="container">
//       <Router>
//         <Route path="/" component={App} />
//         <Route path="/login" component={UserLogin} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/dashboard" component={Dashboard} />
//       </Router>
//     </div>
//   );
// };

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
