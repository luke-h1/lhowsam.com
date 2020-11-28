/* eslint-disable */
import React from 'react';
import Helmet from 'react-helmet';
import CardItemLarge from '../../templates/CardItemLarge/CardItemLarge';
import Image3 from '../../assets/images/Projects/pink-pattern-pawel.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useDarkTheme } from '../../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../../styles/Themes';
import { ThemeProvider } from 'styled-components';

const Automation = () => {
  const [theme, setTheme] = useDarkTheme(
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) || 'light',
  );

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
return (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

<>
    <Helmet>
      <title>Projects - Automation</title>
      <meta name="description" content="Projects - Automation" />
    </Helmet>
    <Navbar theme={theme} toggleTheme={themeToggler}/>
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
    <Footer theme={theme} />
  </>
  </ThemeProvider>
);
}
export default Automation;
