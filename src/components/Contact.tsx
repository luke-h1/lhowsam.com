import React from 'react';

const Contact = () => {
  return (
    <div className="container px-4 mx-auto mb-10">
      <h2 className="text-2xl font-bold text-gray-800">Get in touch</h2>
      <p className="mt-6 text-gray-800">
        Do you have a project or opportunity you'd like to discuss? Feel free to
        reach me via
        {' '}
        <a
          href="mailto:luke.howsam54@gmail.com"
          className="font-medium transition-colors hover:text-sky-500 text-black"
        >
          email
        </a>
        .
      </p>
      <p className="mb-3 text-gray-800">
        You can also get in touch with me on the following platforms
      </p>
      <ul>
        <li className="mb-2">
          <a
            href="https://www.linkedin.com/in/lukehowsam"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li className="mb-2">
          <a href="https://github.com/luke-h1" target="_blank" rel="noreferrer">
            Github
          </a>
        </li>
        <li className="mb-2">
          <a
            href="https://twitter.com/LukeH_1999"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Contact;
