import React, { Component } from "react";
import { css } from "glamor";
import "./intro.css";
import Translate from "../../../translate";

class Intro extends Component {
  render() {
    const height = window.innerHeight - 70;

    const introCss = css({ height });

    return (
      <div {...introCss} className="intro">
        <div className="image-container">
          <img src="/images/logoLarge.png" alt="The logo for the website" />
        </div>
      </div>
    );
  }
}

export default Translate(Intro);
