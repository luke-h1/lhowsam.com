export const buildURL = (url: string, obj: object) => {
  const query = Object.entries(obj).map(pair => pair.map(encodeURIComponent).join('=')).join('&');
  return `${url}?${query}`
}
