export const resolveInternalUrl = (href: string, origin: string) =>
  new URL(href, origin).toString();

export const navigateToInternalUrl = (
  href: string,
  origin: string,
  navigate: (url: string) => void = url => {
    window.location.assign(url);
  },
) => {
  navigate(resolveInternalUrl(href, origin));
};
