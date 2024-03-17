// type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

export default async function fetcher() {
  const useNewEndpoint = process.env.NEXT_PUBLIC_URL !== 'lhowsam.com';
  return fetch(
    useNewEndpoint
      ? (process.env.NEXT_PUBLIC_NEW_ENDPOINT as string)
      : `${process.env.NEXT_PUBLIC_URL}/api/now-playing`,
    {
      headers: {
        'Content-Type': 'application/json',
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
