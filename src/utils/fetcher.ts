export default async function fetcher(
  url: string,
  method: string,
  data: unknown,
) {
  return fetch(`${window.location.origin}/api${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async res => {
    if (res.status > 399 && res.status < 200) {
      const e = await res.json();
      throw new Error(e);
    }
    return res.json();
  });
}
