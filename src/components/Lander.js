import React from "react"
// import landerImage from "../src/lander.png";

class Lander extends React.Component {
  render() {
    let landerImage = "/Users/keolazy/Desktop/poker-app/src/lander.png"
    return (
      <div className="jumbotron">
        <h1>Lander Component</h1>
        <img href={landerImage} alt="landerPicture" />
      </div>
    )
  }
}

export default Lander;