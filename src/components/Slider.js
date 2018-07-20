import React from "react";
import slider1 from "/Users/keolazy/Desktop/poker-app/src/images/aceSpadesVertical.jpg";
import slider2 from "/Users/keolazy/Desktop/poker-app/src/images/5diamondVertical.jpg";
import slider3 from "/Users/keolazy/Desktop/poker-app/src/images/blueCardsVertical.jpg";

class Slider extends React.Component {
  render() {
    return (
      <div className="uk-position-relative uk-visible-toggle uk-light">
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
          <li>
            <div className="uk-panel">
              <img src={slider1} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-panel">
              <img src={slider2} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>2</h1>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-panel">
              <img src={slider3} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>3</h1>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-panel">
              <img src={slider1} alt="" />
              <div className="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;
