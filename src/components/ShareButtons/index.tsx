import React from 'react';
import {
  EmailShareButton, RedditShareButton, TwitterShareButton, LinkedinShareButton, 
, EmailIcon, TwitterIcon, LinkedinIcon } from 'react-share';

import styled from 'styled-components';

const ShareBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.2rem 0.4rem;

  * {
    margin: 0 0.2rem;
  }
`;

const ShareButtons = ({ location }) => (
  <ShareBtnWrap>
      <EmailShareButton url={location}>
        <EmailIcon round size={30} />
      </EmailShareButton>

      <TwitterShareButton url={location}>
        <TwitterIcon round size={30} />
      </TwitterShareButton>

      <LinkedinShareButton url={location}>
        <LinkedinIcon round size={30} />
      </LinkedinShareButton>
    </ShareBtnWrap>
);

export default ShareButtons;
