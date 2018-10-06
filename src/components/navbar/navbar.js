import React, { Component } from 'react';
import './navbar.css';
import LanguageButton from '../languageButton';
import Translate from '../translate';

class Navbar extends Component {
  render() {
    const { translations } = this.props;
    return (
      <div className="navbar">
        <div className="container">
          <div className="navbar--item navbar__left">
            <a className="anchor__home" href="/">
              <img
                src="/images/reboothack_small.png"
                alt="The logo for the website"
              />
              Re:bo<span>o</span>t Hack
            </a>
          </div>
          <div className="navbar--item navbar__right">
            <a className="button__register" href="/sponsors">
              {translations.sponsors.content}
            </a>
            <LanguageButton />
            <a className="button__register" href="./#register">
              {translations.home.register.submit}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Translate(Navbar);
