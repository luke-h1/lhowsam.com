import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { breakpoint } from '@src/utils/style';
import { sharedTransition } from './utils';
import { Datestamp, PaddingListItems } from './typography';

export const removeListStyleMixin = css`
  & ul {
    list-style: none;
    padding-left: 30px;
  }
`;

export const BlogPostMDXContent = styled(PaddingListItems)`
  padding: 30px 0;
`;

export const Card = styled.div`
  padding: 10px 0;
  cursor: pointer;

  & > ${Datestamp} {
    font-size: 0.8rem;
    font-style: unset;
  }
`;

export const WarningSpan = styled.span`
  padding: 5px 10px;
  margin: 0 15px;
  background-color: red;
  color: #fff;
  border-radius: var(--border-radius); ;
`;

export const PostMetaDataGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const RoundImageSmall = styled.img`
  height: 25px;
  border-radius: 50%;
`;

export const StyledPre = styled.pre`
  background-color: var(--color-inlineCode-bg);
  margin: 0;
  padding: 15px;
  border-radius: var(--border-radius);
  font-size: 14px;
`;

export const IconContainer = styled.a<{ $styledOnHover?: boolean }>`
  font-size: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.3rem;

  ${({ $styledOnHover }) => ($styledOnHover
    ? css`
          color: var(--color-primary);
          :hover {
            color: var(--color-primary-accent);
          }
        `
    : css`
          color: var(--color-primary-accent);
        `)}

  & > span {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.7rem;
    line-height: 1rem;
  }
`;

export const LinkedHeaderIconWrapper = styled.a<{ isHovered: boolean }>`
  color: var(--color-primary-accent);
  position: absolute;
  transform: translateX(-125%) translateY(0.2rem);
  font-size: inherit;

  opacity: ${({ isHovered }) => (isHovered ? 0.75 : 0)};
  transition: opacity 200ms ease;
  ${breakpoint.until.md(css`
    display: none;
  `)}
`;
