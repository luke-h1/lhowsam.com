import React, { Fragment } from 'react';
import CardItemLarge from '../../CardItem/CardItemLarge/CardItemLarge';
import Image3 from '../../../Images/Projects/Image3.jpeg';

const Automation = () => {
  return (
    <Fragment>
      <CardItemLarge
        title="Automation"
        src={Image3}
        alt='text'
        desc="I am a huge advocate for infrastructure automation as this
        allows teams to focus on innovating new features and solving new
        problems rather than being backlogged with maintaining
        infrastructure. In this project I made Ansible playbooks & Bash
        scripts that automate the setup of Linux & Mac OS X workstations
        & servers"
        label="Ansible, Bash, CI"
        github="https://github.com/luke-h1/Automation"
        site=""
      />
    </Fragment>
  );
};

export default Automation;
