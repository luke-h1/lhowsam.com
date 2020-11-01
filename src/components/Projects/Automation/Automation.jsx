import React, { Fragment } from 'react';
import CardItemLarge from '../../CardItem/CardItemLarge/CardItemLarge';
import '../../CardItem/CardItemLarge/CardItemLarge.scss';

import Image3 from '../../../Images/Projects/Image3.jpeg';

const Automation = () => {
  return (
    <Fragment>
      <CardItemLarge
        title="Automation"
        src={Image3}
        alt="City Traffic"
        desc="I am a huge advocate for infrastructure automation & continuous integration as this
        allows developerrs to focus on innovating new features and solving new
        problems rather than being backlogged with maintaining existing
        infrastructure. In this project I made Ansible playbooks & Bash
        scripts that automate the setup of Linux & Mac OS X workstations
        & servers. In addition to this I also setup an azure pipeline to run on pull requests made to the repository to ensure that any features added to the playbooks have no errors."
        label="Ansible, Bash, CI"
        github="https://github.com/luke-h1/Automation"
        site=""
      />
    </Fragment>
  );
};

export default Automation;
