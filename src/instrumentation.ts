import { registerOTel } from '@vercel/otel';

const { NEXT_PUBLIC_URL } = process.env;

const name =
  NEXT_PUBLIC_URL === 'https://lhowsam.com'
    ? 'lhowsam.com production'
    : 'lhowsam.com development';

export function register() {
  registerOTel(name);
}
