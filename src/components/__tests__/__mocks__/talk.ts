import { Talk } from '@frontend/types/sanity';

const talks: Talk[] = [
  {
    _rev: 'kgh9QiF1DxVbntovqiQuwu',
    description:
      'Feature flag talk discussing feature flags + A/B. testing and why you might want to use them in your projects',
    _id: 'a4048fcb-6ad5-480d-ae60-3ae9b6a2646e',
    _updatedAt: '2024-07-01T11:45:19Z',
    date: '2024-04-30',
    _type: 'talk',
    _createdAt: '2024-04-13T19:53:59Z',
    image: {
      _type: 'image',
      alt: "code with a. green background depicting `document.cookie = 'new-design=true'`",
      asset: {
        _ref: 'image-6d2b6e1f6600c84606923c8638a5b27b0cfb3643-1040x496-png',
        _type: 'reference',
      },
    },
    location: 'Sheffield, UK',
    slideUrl: 'https://feature-flags-24.talks.lhowsam.com/presenter/1',
    title: 'Feature flags frontend Sheffield',
  },
];
export default talks;
