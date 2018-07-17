import React from "react"
// import landerImage from "../src/lander.png";

class Lander extends React.Component {
  render() {
    let landerImage = "../src/24hours.jpg"
    return (
      <div className="jumbotron">
        <h1>Lander Component</h1>
        <img src={landerImage} alt="landerPicture" />
      </div>
    )
  }
}

export default Lander;