import React, { FunctionComponent } from 'react';
import {
  EmailShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

import styled from '@emotion/styled';

const ShareBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > * { 
    margin: 0 1rem 0 1rem;
  }
`;

interface Iprops {
  location: string;
}

const ShareButtons: FunctionComponent<Iprops> = ({ location }) => (
  <>
    <ShareBtnWrap>
      <EmailShareButton url={location}>
        <EmailIcon round size={35} />
      </EmailShareButton>
      <TwitterShareButton url={location}>
        <TwitterIcon round size={35} />
      </TwitterShareButton>
      <LinkedinShareButton url={location}>
        <LinkedinIcon round size={35} />
      </LinkedinShareButton>
    </ShareBtnWrap>
  </>
);

export default ShareButtons;
