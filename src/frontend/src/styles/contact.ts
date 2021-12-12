import { breakpoint } from '@src/utils/style';
import styled, { css } from 'styled-components';

export const ContactWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  ${breakpoint.from.md(css`
    grid-template-columns: 1fr 2fr;
  `)}
`;