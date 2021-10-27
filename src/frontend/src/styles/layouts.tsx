import { sharedTransition } from '@src/styles/components';
import Image from 'next/image';
import styled from 'styled-components';

export const PreviewLayout = styled.div`
  display: grid;
  gap: 1rem;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr min(var(--max-width), calc(100% - 2rem)) 1fr;
  gap: 1rem;
  padding: 0;

  & > * {
    grid-column: 2;
  }
`;

export const Center = styled.div`
  display: grid;
  padding: 0;
  justify-items: center;
`;

export const WrapperForFooter = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  align-items: start;

  color: var(--color-primary);
  background-color: var(--color-background);

  ${sharedTransition('color, background-color')}
`;

export const Space = styled.div<{ size?: number }>`
  margin: 0;
  padding: ${({ size }) => (size ? `${size / 2}px` : '50px')};
`;

export const FullWidth = styled.div`
  width: 100%;
  grid-column: 1 / -1;
`;

export const StyledImage = styled(Image)`
  border-radius: 8px;
`;

export const StackContainer = styled.footer`
  display: grid;
  margin-top: 0.7rem;
  grid-template-columns: repeat(auto-fill, minmax(min(85px, 100%), 1fr));
  gap: 0.5rem;
`

export const TagItem = styled.div`
  padding: 1.2rem 0;
`


export const Stack = styled.span`
  padding: 0.1rem 0.2rem;
  border-radius: 0.2rem;
  color: var(--color-inlineCode-bg);
  background: #000;
  border: 0.1px solid var(--color-inlineCode-bg);
  min-width: 55px;
  text-align: left;
  cursor: default;
  transition: 200ms;
  opacity: 0.7;
  font-size: 0.75rem;
  margin: 0;
  @media (hover: hover) {
    &:hover {
      opacity: 1;
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 0px 8px 2px rgb(22, 27, 34, 0.3);
    }
  }
`