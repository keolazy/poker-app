import React from "react"
// Storing images in SRC allows you to access them like components.
import landerImage from "/Users/keolazy/Desktop/poker-app/src/24hours.jpg"

console.log(landerImage);

class Lander extends React.Component {
  render() {
    // let landerImage;
    return (
      <div className="jumbotron">
        <img src={landerImage} alt="landerPicture" />
      </div>
    )
  }
}

export default Lander;