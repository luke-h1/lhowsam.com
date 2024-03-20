// type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

export default async function fetcher() {
  const useNewEndpoint = process.env.NEXT_PUBLIC_URL !== 'lhowsam.com';
  const endpoint = useNewEndpoint
    ? process.env.NEXT_PUBLIC_NEW_ENDPOINT
    : `${process.env.NEXT_PUBLIC_URL}/api/now-playing`;
  return fetch(endpoint as string, {
    headers: {
      'Content-Type': 'application/json',
      'x-consumer': 'lhowsam.com',
    },
    method: 'GET',
  }).then(async res => {
    if (res.status > 399 && res.status < 200) {
      const error = await res.json();
      throw new Error(error);
    }
    return res.json();
  });
}
