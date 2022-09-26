/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { RiHome7Fill, RiQuillPenFill } from 'react-icons/ri';
import { FiSearch, FiBell, FiMail } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { CreateTweetButton, FooterButtons, FooterContainer } from '.';
import Routes from '../../utils/redirectFunctions';

function Footer() {
  const router = useRouter();
  const redirect = new Routes(router);

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
      <CreateTweetButton
        onClick={() => redirect.redirectToTweetPage()}
        type="button"
        aria-label="create-tweet-button"
      >
        <RiQuillPenFill />
      </CreateTweetButton>
    </FooterContainer>
  );
}

export default Footer;
