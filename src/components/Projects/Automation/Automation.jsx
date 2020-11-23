import React from 'react';
import CardItemLarge from '../../CardItem/CardItemLarge/CardItemLarge';
import Image3 from '../../../assets/images/Projects/pink-pattern-pawel.jpeg';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const Automation = () => {
  return (
    <>
      <Navbar />
      <CardItemLarge
        title="Automation"
        src={Image3}
        alt="City Traffic"
        desc="I am a huge advocate for infrastructure automation & continuous integration as this
        allows developers to focus on innovating new features and solving new
        problems rather than being backlogged with maintaining existing
        infrastructure. In this project I made Ansible playbooks & Bash
        scripts that automate the setup of Linux & Mac OS X workstations
        + servers. In addition to this I also setup an azure pipeline to run on pull requests made to the repository to ensure that any features added to the playbooks have no errors."
        label="Ansible, Bash, CI"
        github="https://github.com/luke-h1/Automation"
        site=""
      />
      <Footer />
    </>
  );
};

export default Automation;
