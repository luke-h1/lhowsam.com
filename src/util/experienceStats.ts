import { differenceInYears, parseISO } from 'date-fns';
import type { ExperienceCompany } from '../data/experience';

export type ExperienceStats = {
  years: number;
  companies: number;
  roles: number;
};

export function getExperienceStats(
  companies: ExperienceCompany[],
  now: Date = new Date(),
): ExperienceStats {
  const roles = companies.flatMap(company => company.roles);
  const starts = roles
    .map(role => parseISO(role.from).getTime())
    .filter(time => !Number.isNaN(time));
  const earliest = starts.length > 0 ? new Date(Math.min(...starts)) : null;

  return {
    years: earliest ? Math.max(differenceInYears(now, earliest), 0) : 0,
    companies: companies.length,
    roles: roles.length,
  };
}

export function getTopTechStack(
  companies: ExperienceCompany[],
  limit: number = 12,
): string[] {
  const counts = companies
    .flatMap(company => company.roles)
    .flatMap(role => role.techStack)
    .reduce(
      (acc, tech) => acc.set(tech, (acc.get(tech) ?? 0) + 1),
      new Map<string, number>(),
    );

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tech]) => tech);
}
