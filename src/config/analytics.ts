// export const analyticEvents = ['ProjectItemClicked', 'BlogItemClicked'];

const projectEvents = {
  projectTagClicked: 'ProjectTagClicked',
  projectSiteClicked: 'ProjectSiteClicked',
  projectGithubClicked: 'ProjectGithubClicked',
  projectItemClicked: 'ProjectItemClicked',
};

const blogEvents = {
  blogItemClicked: 'BlogItemClicked',
  blogTagClicked: 'BlogTagClicked',
};

const analyticEvents = {
  ...projectEvents,
  ...blogEvents,
  cvClicked: 'cvClicked',
} as const;

export type AnalyticEvent =
  (typeof analyticEvents)[keyof typeof analyticEvents];

export default analyticEvents;
