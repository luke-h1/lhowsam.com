"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var prop_types_1 = require("prop-types");
var react_helmet_1 = require("react-helmet");
var gatsby_1 = require("gatsby");
var SEO = function (_a) {
    var description = _a.description, lang = _a.lang, meta = _a.meta, title = _a.title;
    var site = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            social {\n              twitter\n            }\n          }\n        }\n      }\n    "], ["\n      query {\n        site {\n          siteMetadata {\n            title\n            description\n            social {\n              twitter\n            }\n          }\n        }\n      }\n    "])))).site;
    var metaDescription = description || site.siteMetadata.description;
    var defaultTitle = site.siteMetadata.title;
    return (react_1["default"].createElement(react_helmet_1.Helmet, { htmlAttributes: {
            lang: lang
        }, title: title, titleTemplate: defaultTitle ? "%s | " + defaultTitle : null, meta: [
            {
                name: 'description',
                content: metaDescription
            },
            {
                property: 'og:title',
                content: title
            },
            {
                property: 'og:description',
                content: metaDescription
            },
            {
                property: 'og:type',
                content: 'website'
            },
            {
                name: 'twitter:card',
                content: 'summary'
            },
            {
                name: 'twitter:creator',
                content: site.siteMetadata.social.twitter || ''
            },
            {
                name: 'twitter:title',
                content: title
            },
            {
                name: 'twitter:description',
                content: metaDescription
            },
        ].concat(meta) }));
};
SEO.defaultProps = {
    lang: 'en',
    meta: [],
    description: ''
};
SEO.propTypes = {
    description: prop_types_1["default"].string,
    lang: prop_types_1["default"].string,
    meta: prop_types_1["default"].arrayOf(prop_types_1["default"].object),
    title: prop_types_1["default"].string.isRequired
};
exports["default"] = SEO;
var templateObject_1;
