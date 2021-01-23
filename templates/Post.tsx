import React from "react";

const Post = ({ children, frontMatter }) => {
  return (
    <>
      <ul>
        <li>{frontMatter.slug}</li>
        <li>{frontMatter.title}</li>
        <li></li>
        <li></li>
      </ul>
      <p>{children}</p>
    </>
  );
};
export default Post;
