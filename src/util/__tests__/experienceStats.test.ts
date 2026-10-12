import { describe, expect, test } from 'vitest';

import type { ExperienceCompany } from '../../data/experience';
import { getExperienceStats, getTopTechStack } from '../experienceStats';

const companies: ExperienceCompany[] = [
  {
    company: 'Newer Co',
    slug: 'newer-co',
    from: '2023-08-14',
    to: null,
    isPresent: true,
    roles: [
      {
        title: 'Developer',
        location: 'Leeds, UK',
        from: '2023-08-14',
        to: '2024-11-14',
        summary: '',
        achievements: [],
        techStack: ['TypeScript', 'AWS', 'Terraform'],
      },
      {
        title: 'Senior Developer',
        location: 'Leeds, UK',
        from: '2025-01-06',
        to: null,
        summary: '',
        achievements: [],
        techStack: ['React Native', 'TypeScript', 'AWS'],
      },
    ],
  },
  {
    company: 'Older Co',
    slug: 'older-co',
    from: '2019-06-06',
    to: '2020-07-01',
    isPresent: false,
    roles: [
      {
        title: 'Analyst',
        location: 'Sheffield, UK',
        from: '2019-06-06',
        to: '2020-07-01',
        summary: '',
        achievements: [],
        techStack: ['Support', 'TypeScript'],
      },
    ],
  },
];

describe('getExperienceStats', () => {
  test('counts whole years since the earliest role start', () => {
    expect(getExperienceStats(companies, new Date('2026-09-11'))).toEqual({
      years: 7,
      companies: 2,
      roles: 3,
    });
  });

  test('does not go negative when now is before the earliest role', () => {
    expect(getExperienceStats(companies, new Date('2018-01-01')).years).toBe(0);
  });

  test('handles an empty experience list', () => {
    expect(getExperienceStats([])).toEqual({
      years: 0,
      companies: 0,
      roles: 0,
    });
  });
});

describe('getTopTechStack', () => {
  test('orders tech by how many roles used it, keeping first-seen order for ties', () => {
    expect(getTopTechStack(companies)).toEqual([
      'TypeScript',
      'AWS',
      'Terraform',
      'React Native',
      'Support',
    ]);
  });

  test('respects the limit', () => {
    expect(getTopTechStack(companies, 2)).toEqual(['TypeScript', 'AWS']);
  });
});
