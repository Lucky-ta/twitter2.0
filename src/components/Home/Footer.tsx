/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { RiHome7Fill } from 'react-icons/ri';
import { FiSearch, FiBell, FiMail } from 'react-icons/fi';
import { FooterButtons, FooterContainer } from '.';

function Footer() {
  const jumpToTopBrowser = () => {
    window.scroll(0, 0);
  };

  return (
    <FooterContainer>
      <FooterButtons onClick={jumpToTopBrowser} type="button">
        <RiHome7Fill />
      </FooterButtons>
      <FooterButtons type="button">
        <FiSearch />
      </FooterButtons>
      <FooterButtons type="button">
        <FiBell />
      </FooterButtons>
      <FooterButtons type="button">
        <FiMail />
      </FooterButtons>
    </FooterContainer>
  );
}

export default Footer;
