import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Article = styled.article`
  width: 500px;
  margin: 
  1.5rem 0 1.5rem 0;
`;

const Header = styled.header`
  h1 {
    margin: 0 0 1rem 0;
  }
  p {
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const BlogPost = ({ title, summary, slug }) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a>
          <Article>
            <Header>
              <h1>{title}</h1>
              <p>{summary}</p>
            </Header>
            <hr style={{ color: "#eaeaea" }} />
          </Article>
        </a>
      </Link>
    </>
  );
};
export default BlogPost;
