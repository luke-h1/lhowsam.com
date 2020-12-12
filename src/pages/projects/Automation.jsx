import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';
import ProjectPage from '../../templates/ProjectPage/ProjectPage';
import SEO from '../../components/seo';

const Automation = () => {
  // eslint-disable-next-line no-unused-vars
  const { image } = useStaticQuery(graphql`
  query {
    image: file(relativePath: {eq: "project-images/Image3.jpeg"}) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Projects - Automation" />

      <ProjectPage
        title="Automation"
        src={image.sharp.fluid.src}
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
    </Layout>
  );
};
export default Automation;
