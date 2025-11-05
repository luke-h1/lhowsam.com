interface Job {
  id: number;
  title: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
  blurb?: string;
  keyAchievements?: string[];
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
        blurb:
          'L2 tech support for a sass insurance app that served customers throughout the EU, UKI, and NA (north America).',
        keyAchievements: [
          'Provided technical support to customers throughout different regions (EMEA, UKI, IT, FR, DE)',
          'Resolved customer issues',
          'Collaborated with the development and QA team for deeper understanding to resolve issues more efficiently',
        ],
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
        blurb:
          'Worked as a Junior software tester to take over from the previous tester.',
        keyAchievements: [
          'Built up testing skills both automated and manual',
          'Aided in the maintenance of large and small projects',
          'Established testing foundations for the team',
        ],
      },
      {
        id: 2,
        title: 'Software Tester',
        location: 'Sheffield, UK',
        startDate: '01/05/2021',
        endDate: '01/05/2022',
        blurb:
          'Worked as a mid/senior software tester to improve the existing testing culture within the company.',
        keyAchievements: [
          'Reduced technical debt',
          'Improved team happiness',
          'Enhanced testing practices and standards',
          'Led and maintained test plans and documentation throughout the project lifecycle',
        ],
      },
      {
        id: 3,
        title: 'Software Engineer',
        location: 'Sheffield, UK',
        startDate: '01/05/2022',
        endDate: '11/08/2023',
        blurb:
          'Worked as a full-stack software engineer at a local digital agency mainly on government and charity projects.',
        keyAchievements: [
          'Drove DevOps + internal process improvement',
          'Handled feature + maintenance tasks',
          'Presented technical proof of concepts to stakeholders',
          'Supported + mentored teammates',
        ],
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
        blurb:
          'Software Developer within the GLS (Game Launch Service) squad that provided game-launching capabilities for all gaming content across the business',
        keyAchievements: [
          'Maintained internal NPM packages, shared SDKs, web apps, serverless functions',
          'Maintenance of mission critical safer gambling tool (Reality Check)',
          'Drove DevOps improvements',
          'Monitored services (NewRelic, Grafana & Prometheus)',
          'Supported + mentored teammates',
          'Performed captain duties (support queries etc.)',
        ],
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
        startDate: '06/01/2025',
        blurb: 'Software Developer within the Sporting Life TimeForm division.',
        keyAchievements: [
          'Greenfield React-Native development (alongside Software-Mansion for the first 9 months of the project)',
          'Spearhead development on shared SDK kits for React Native & Web',
          'Improve org-wide DevOps approaches - Terraform, CI/CD, Cloud infrastructure etc.',
          'Maintenance + feature work on various frontend & backend projects',
        ],
      },
    ],
  },
];
export default companies;
