export default async function fetcher() {
  return fetch(
    `${process.env.NEXT_PUBLIC_NOW_PLAYING_API_BASE_URL}/api/now-playing`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-consumer': 'lhowsam.com',
      },
      method: 'GET',
    },
  ).then(async res => {
    if (res.status > 399 && res.status < 200) {
      const error = await res.json();
      throw new Error(error);
    }
    return res.json();
  });
}
