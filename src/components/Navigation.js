import React from "react";
// import { NavLink} from "react-douter-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/" >Home </NavLink>
      <NavLink to="/login" >Login</NavLink>
      <NavLink to="/contact" >Contact</NavLink>
      <NavLink to="/signup" >Sign Up</NavLink>
    </div>
  );
}

export default Navigation;