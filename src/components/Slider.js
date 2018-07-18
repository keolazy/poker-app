import React, { Component } from 'react'
import slider1 from '/Users/keolazy/Desktop/poker-app/src/aceSpadesVertical.jpg';
import slider2 from '/Users/keolazy/Desktop/poker-app/src/5diamondVertical.jpg';
import slider3 from '/Users/keolazy/Desktop/poker-app/src/blueCardsVertical.jpg';

class Slider extends React.Component {
  render() {
    return (
      <div className="uk-position-relative uk-visible-toggle uk-light" uk-slider>

          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
              <li>
                  <img src={slider1} alt="sliderPic1" />
                  <div className="uk-position-center uk-panel"><h1>1</h1></div>
              </li>
              <li>
                  <img src={slider2} alt="" />
                  <div className="uk-position-center uk-panel"><h1>2</h1></div>
              </li>
              <li>
                  <img src={slider3} alt="" />
                  <div className="uk-position-center uk-panel"><h1>3</h1></div>
              </li>
          </ul>
          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
          <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
     </div>
    )
  }
}

export default Slider