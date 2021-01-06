"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var gatsby_1 = require("gatsby");
var usePosts = function () {
    var data = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {\n      edges {\n        node {\n          excerpt\n          frontmatter {\n            date\n            description\n            title\n            slug\n          }\n        }\n      }\n    }\n  }\n  \n  "], ["\n  {\n    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {\n      edges {\n        node {\n          excerpt\n          frontmatter {\n            date\n            description\n            title\n            slug\n          }\n        }\n      }\n    }\n  }\n  \n  "]))));
    return data.allMarkdownRemark.edges.map(function (post) { return ({
        date: post.node.frontmatter.date,
        description: post.node.frontmatter.description,
        title: post.node.frontmatter.title,
        slug: post.node.frontmatter.slug,
        excerpt: post.node.excerpt
    }); });
};
exports["default"] = usePosts;
var templateObject_1;
