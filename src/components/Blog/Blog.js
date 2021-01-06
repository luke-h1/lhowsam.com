"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var usePosts_1 = require("../../hooks/usePosts");
var seo_1 = require("../seo");
var BlogElements_1 = require("./BlogElements");
var Blog = function (props) {
    var theme = props;
    var posts = usePosts_1["default"]();
    return (react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: theme },
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(seo_1["default"], { title: "Blog" }),
            react_1["default"].createElement(BlogElements_1.BlogContainer, null,
                react_1["default"].createElement(BlogElements_1.BlogIntro, null,
                    react_1["default"].createElement("h1", null, "Blog"))),
            react_1["default"].createElement(BlogElements_1.BlogFlex, null, posts.map(function (post) { return (react_1["default"].createElement(BlogElements_1.BlogList, { key: post.slug },
                react_1["default"].createElement(BlogElements_1.BlogArticle, null,
                    react_1["default"].createElement(BlogElements_1.BlogHeader, null,
                        react_1["default"].createElement("h2", null,
                            react_1["default"].createElement(BlogElements_1.BlogLink, { to: post.slug },
                                react_1["default"].createElement("span", null, post.title))),
                        react_1["default"].createElement("small", null, post.date)),
                    react_1["default"].createElement(BlogElements_1.BlogSection, null,
                        react_1["default"].createElement("p", { style: { color: '#000' }, 
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML: {
                                __html: post.description || post.excerpt
                            } }))))); })))));
};
exports["default"] = Blog;
