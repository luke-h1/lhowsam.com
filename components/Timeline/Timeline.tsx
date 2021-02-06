import { FC } from 'react';
import {
  Container,
  TimeLine,
  Item,
  SubHeading,
  Description,
  Small,
  Technologies,
} from './TimelineStyles';

const Timeline: FC = () => {
  return (
    <>
      <Container>
        <TimeLine>
          <Item>
            <Small>2020 - present</Small>
            <SubHeading>Software Tester - Hive IT</SubHeading>
            <Description>Manual & automated testing</Description>
            <Technologies>
              Tech used: Selenium, Robot Framework, Python, Git, Github
            </Technologies>
          </Item>
          <Item>
            <Small>2019 - 2020</Small>
            <SubHeading>Service desk - The Floow</SubHeading>
            <Description>second line support</Description>
            <Technologies>
              Tech used: Linux, Bash
            </Technologies>
          </Item>
        </TimeLine>
      </Container>
    </>
  );
};
export default Timeline;
