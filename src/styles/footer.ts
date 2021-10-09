import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12rem;
  margin-top: 2rem;
  padding-bottom: 2rem;

  a {
    text-decoration: underline;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--content-width);

  @media (max-width: 450px) {
    text-align: center;
    flex-direction: column;

    .footerLinks {
      margin-top: 1rem;
    }
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  a {
    font-size: 1.1rem;
    margin: 0 0.2rem;
  }

  @media (max-width: 635px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    margin-top: 1rem;
  }
`;
