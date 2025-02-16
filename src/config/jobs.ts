interface Job {
  id: number;
  title: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface Company {
  id: number;
  title: string;
  jobs: Job[];
}

const companies: Company[] = [
  {
    id: 1,
    title: 'The Floow',
    jobs: [
      {
        id: 1,
        title: 'Junior service desk analyst',
        location: 'Sheffield, UK',
        startDate: '06/06/2019',
        endDate: '01/07/2020',
        description:
          'L2 tech support for a sass insurance app that served customers throughout the EU, UKI, and NA (north America)',
      },
    ],
  },
  {
    id: 2,
    title: 'Hive IT',
    jobs: [
      {
        id: 1,
        title: 'Junior Software Tester',
        location: 'Sheffield, UK',
        startDate: '05/10/2020',
        endDate: '01/05/2021',
        description: `Worked as a Junior software tester to take over from the previous tester. Built up testing skills both automated and manual to aid in the maintenance of large and small projects`,
      },
      {
        id: 2,
        title: 'Software Tester',
        location: 'Sheffield, UK',
        startDate: '01/05/2021',
        endDate: '01/05/2022',
        description: `Worked on improving the existing testing culture within the company to reduce technical debt and improve happiness`,
      },
      {
        id: 3,
        title: 'Software Engineer',
        location: 'Sheffield, UK',
        startDate: '01/05/2022',
        endDate: '11/08/2023',
        description: `Worked as a full-stack software engineer at a local digital agency mainly on government and charity projects. Responsible for driving DevOps + internal process improvement, feature + maintenance tasks ,presenting technical proof of concepts to stakeholders and supporting + mentoring teammates`,
      },
    ],
  },
  {
    id: 3,
    title: 'Sky Betting & Gaming',
    jobs: [
      {
        id: 4,
        title: 'Software Engineer',
        location: 'Leeds, UK',
        startDate: '14/08/2023',
        endDate: '14/11/2024',
        description: `Worked within the GLS (Game Launch Service) squad that provided game-launching capabilities for all gaming content across the business in addition to Reality Check (a safer gambling tool). Responsible for maintaining internal NPM packages, shared SDKs, web apps, serverless functions, driving DevOps improvements, monitoring our services (NewRelic, Grafana & Prometheus), supporting + mentoring teammates and captain duties (support queries etc.)`,
      },
    ],
  },
  {
    id: 4,
    title: 'Flutter UKI',
    jobs: [
      {
        id: 5,
        title: 'Software Developer',
        location: 'Leeds, UK',
        description: 'Greenfield React Native development',
        startDate: '06/01/2025',
      },
    ],
  },
];
export default companies;
