export interface Stack {
  title: string;
  description: string;
  src: string;
}

export interface StackSection {
  title: string;
  stacks: Stack[];
}

export const uses: Stack[] = [
  {
    title: '16" MacBook Pro (M2 pro)',
    description:
      'Solid laptop and something I can rely on daily. The difference between the ARM and intel chips is amazing. Much more silent & quicker too',
    src: '/images/apple.jpg',
  },
  {
    title: 'Ducky One 2 SF keyboard',
    description:
      'Great keyboard albeit a little noisy (cherry MX blues). Worked solidly for 2+ years',
    src: '/images/kb.jpeg',
  },
  {
    title: 'Logitech StreamCam',
    description: 'Reliable 1080p camera for zoom etc.',
    src: '/images/logitech-cam.jpg',
  },
  {
    title: 'Airpods Pro (gen 2)',
    description: 'Super convenient, easy to connect to and good quality.',
    src: '/images/airpods.png',
  },
  {
    title: 'Mokin USB adapter',
    description:
      'Great USB c adapter with long life span and a variety of ports',
    src: '/images/mokin.jpg',
  },
];
