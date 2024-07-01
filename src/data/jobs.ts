import { Job } from '@frontend/types/experience';

const jobs: Job[] = [
  {
    id: 1,
    title: 'Junior Software Tester',
    company: 'Hive IT',
    location: 'Sheffield, UK',
    type: 'hybrid',
    startDate: '15-10-2020',
    endDate: '15-05-2021',
    description:
      'Worked as a Junior software tester to take over from the previous tester. Built up testing skills both automated and manual to aid in the maintenance of large and small projects',
    tags: [],
  },
  {
    id: 2,
    title: 'Software Tester',
    company: 'Hive IT',
    location: 'Shefield, UK',
    type: 'hybrid',
    startDate: '24-05-2021',
    endDate: '11-05-2022',
    description:
      'Worked on improving the existing testing culture within the company to reduce technical debt and improve happiness.',
    tags: [],
  },
];

export default jobs;
