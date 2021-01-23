import React from "react";
import Project from "../../templates/Project";

export default function expressApi() {
  return (
    <>
      <Project
        title="Express API"
        slug="https://lhowsam.com/projects/personal-site"
        body="In this project I build an Express / Node API proxy in order to hide my API keys + secrets on the frontend. This API fetches whether based on city. Try it below !"
      />
    </>
  );
}
