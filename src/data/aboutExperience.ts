export type ExperienceRole = {
  title: string;
  location: string;
  from: string;
  to: string | null;
  summary: string;
  achievements: string[];
  techStack: string[];
};

export type ExperienceCompany = {
  company: string;
  slug: string;
  from: string;
  to: string | null;
  isPresent: boolean;
  roles: ExperienceRole[];
};

export type TimelineRole = ExperienceRole & {
  company: string;
  companyFrom: string;
  companyTo: string | null;
  isPresent: boolean;
  anchor: string;
};

export const profileTags = [
  'React Native',
  'TypeScript',
  'DevOps',
  'Mobile',
  'Backend',
  'Frontend',
];

export const experience: ExperienceCompany[] = [
  {
    company: 'Flutter UKI',
    slug: 'flutter-uki',
    from: '2023-08-14',
    to: null,
    isPresent: true,
    roles: [
      {
        title: 'Software Developer - SBG',
        location: 'Leeds, UK',
        from: '2023-08-14',
        to: '2024-11-14',
        summary:
          'Software Developer within the GLS (Game Launch Service) squad that provided game-launching capabilities for all gaming content across the business.',
        achievements: [
          'Maintained internal NPM packages, shared SDKs, web apps and serverless functions.',
          'Supported a mission-critical safer gambling tool used across the business.',
          'Drove DevOps improvements and helped monitor services with New Relic, Grafana and Prometheus.',
          'Supported and mentored teammates while also taking on captain duties.',
        ],
        techStack: ['TypeScript', 'Node.js', 'AWS', 'Terraform', 'New Relic'],
      },
      {
        title: 'Software Developer - Sporting Life',
        location: 'Leeds, UK',
        from: '2025-01-06',
        to: null,
        summary:
          'Software Developer within the Sporting Life TimeForm division, focused on mobile, shared platform work and delivery improvements.',
        achievements: [
          'Worked on greenfield React Native development alongside Software Mansion during the early phase of the project.',
          'Improve performance and maintainability of the app',
          'Helped spearhead shared SDK development for React Native and web.',
          'Improved org-wide DevOps approaches across Terraform, CI/CD and cloud infrastructure.',
          'Delivered maintenance and feature work across frontend and backend projects.',
        ],
        techStack: [
          'React Native',
          'TypeScript',
          'C#',
          'Terraform',
          'CI/CD',
          'Kubernetes',
        ],
      },
    ],
  },
  {
    company: 'Hive IT',
    slug: 'hive-it',
    from: '2020-10-05',
    to: '2023-08-11',
    isPresent: false,
    roles: [
      {
        title: 'Software Engineer',
        location: 'Sheffield, UK',
        from: '2022-05-01',
        to: '2023-08-11',
        summary:
          'Worked as a full-stack software engineer at a local digital agency, mainly across government and charity projects.',
        achievements: [
          'Drove DevOps and internal process improvements.',
          'Handled feature delivery and maintenance work across client projects.',
          'Presented technical proofs of concept to stakeholders.',
          'Supported and mentored teammates.',
        ],
        techStack: ['TypeScript', 'Testing', 'DevOps', 'Accessibility'],
      },
      {
        title: 'Software Tester',
        location: 'Sheffield, UK',
        from: '2021-05-01',
        to: '2022-05-01',
        summary:
          'Worked as a mid/senior software tester to improve the existing testing culture within the company.',
        achievements: [
          'Reduced technical debt in the testing approach.',
          'Improved team happiness through better quality practices.',
          'Enhanced testing standards and ways of working.',
          'Led and maintained test plans and documentation throughout project lifecycles.',
        ],
        techStack: ['QA', 'Automation', 'Test Strategy', 'Documentation'],
      },
      {
        title: 'Junior Software Tester',
        location: 'Sheffield, UK',
        from: '2020-10-05',
        to: '2021-05-01',
        summary:
          'Worked as a junior software tester, taking ownership of testing after the previous tester moved on.',
        achievements: [
          'Built up both manual and automated testing skills.',
          'Supported maintenance across large and small projects.',
          'Helped establish stronger testing foundations for the team.',
        ],
        techStack: ['Manual Testing', 'Automation', 'QA'],
      },
    ],
  },
  {
    company: 'The Floow',
    slug: 'the-floow',
    from: '2019-06-06',
    to: '2020-07-01',
    isPresent: false,
    roles: [
      {
        title: 'Junior Service Desk Analyst',
        location: 'Sheffield, UK',
        from: '2019-06-06',
        to: '2020-07-01',
        summary:
          'Provided L2 technical support for a SaaS insurance app serving customers across the EU, UKI and North America.',
        achievements: [
          'Provided technical support across multiple regions including EMEA, UKI, IT, FR and DE.',
          'Resolved customer issues and improved turnaround time.',
          'Collaborated with development and QA teams to solve deeper technical issues more efficiently.',
        ],
        techStack: ['Support', 'Troubleshooting', 'SaaS', 'Incident Response'],
      },
    ],
  },
];

const slugifySegment = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const getExperienceRoleAnchor = (
  companySlug: string,
  roleTitle: string,
  roleFrom: string,
) => `${companySlug}-${slugifySegment(roleTitle)}-${roleFrom}`;

export const timelineRoles: TimelineRole[] = experience
  .flatMap(company =>
    company.roles.map(role => ({
      ...role,
      company: company.company,
      companyFrom: company.from,
      companyTo: company.to,
      isPresent: company.isPresent,
      anchor: getExperienceRoleAnchor(company.slug, role.title, role.from),
    })),
  )
  .sort((a, b) => {
    if (a.to === null && b.to !== null) return -1;
    if (a.to !== null && b.to === null) return 1;

    const aEnd = a.to ? new Date(a.to).getTime() : Number.MAX_SAFE_INTEGER;
    const bEnd = b.to ? new Date(b.to).getTime() : Number.MAX_SAFE_INTEGER;

    if (aEnd !== bEnd) {
      return bEnd - aEnd;
    }

    return new Date(b.from).getTime() - new Date(a.from).getTime();
  });
