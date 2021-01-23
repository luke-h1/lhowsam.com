import React from "react";
import Project from "../../templates/Project";

export default function automation() {
  return (
    <>
      <Project 
        title='Automation'
        slug='https://lhowsam.com/projects/automation'
        body='I am a huge advocate for infrastructure automation & continuous integration as this allows developers to focus on innovating new features and solving new problems rather than being backlogged with maintaining existing infrastructure. In this project I made Ansible playbooks & Bash scripts that automate the setup of Linux & Mac OS X workstations + servers. In addition to this I also setup an azure pipeline to run on pull requests made to the repository to ensure that any features added to the playbooks have no errors.'
      />
    </>
  );
};
