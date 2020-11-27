/* eslint-disable react/react-in-jsx-scope */
import BlogPostTemplate from '../../templates/BlogPostTemplate/BlogPostTemplate';

const HelloWorld = () => (
  <>
    <BlogPostTemplate
      title="Hello World"
      desc="Welcome to my new blog. This is about the 4th time I've attempted to create a decent looking blog page. I've only created this one blog post even after all of those attempts"
      desc2="I'll still probably spend ages refactoring this as the architecture behind the scenes isn't very pleasent to deal with (which will be solved hopefully when I move over to gatsby 😀)"
      desc3="My goal in creating a blog page is to write more about things I have learned, weird bugs I have encountered, new tools I try in my applications and various other things."
      date="20th November 2020"
    />
  </>
);
export default HelloWorld;
