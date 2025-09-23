'use client';

import * as Grid from '@frontend/components/Grid';
import * as List from '@frontend/components/List';
import { Company } from '@frontend/config/jobs';
import { useToast } from '@frontend/context/ToastContext';
import { variables } from '@frontend/styles/variables.css';
import { parseDate } from '@frontend/utils/date';
import toCamelCase from '@frontend/utils/toCamelCase';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Link as FeatherLink } from 'react-feather';
import Box from '../Box';
import Heading from '../Heading';
import Text from '../Text';
import Tooltip from '../Tooltip';

interface Props {
  company: Company;
}

export default function ExperienceItem({ company }: Props) {
  const { setToast } = useToast();
  const router = useRouter();
  const [highlightedJobId, setHighlightedJobId] = useState<string | null>(null);

  useEffect(() => {
    // Check if there's a hash in the URL on mount
    const checkHash = () => {
      const hash = window.location.hash.slice(1); // Remove the # character
      if (hash) {
        // Check if this hash corresponds to any job in this company
        const matchingJob = company.jobs.find(job => {
          const jobId = `${toCamelCase(company.title)}-${toCamelCase(job.title)}`;
          return jobId === hash;
        });

        if (matchingJob) {
          setHighlightedJobId(hash);

          // Scroll to the element smoothly
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            }
          }, 100);

          // Remove highlight after animation
          setTimeout(() => {
            setHighlightedJobId(null);
          }, 3000);
        }
      }
    };

    // Check on mount
    checkHash();

    // Listen for hash changes using Next.js router events would be ideal,
    // but since Next.js App Router doesn't expose hash change events,
    // we still need to use the native hashchange event
    const handleHashChange = () => {
      checkHash();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [company.jobs, company.title]);

  const handleCopyJobLink = (jobTitle: string) => {
    const jobId = `${toCamelCase(company.title)}-${toCamelCase(jobTitle)}`;
    const url = `${window.location.origin}${window.location.pathname}#${jobId}`;

    navigator.clipboard.writeText(url);
    setToast({
      content: 'Job link copied to clipboard',
    });

    // Use Next.js router to update the URL hash
    router.push(`#${jobId}`, { scroll: true });
  };

  return (
    <Box
      key={company.title}
      style={{
        borderBottom: `1px solid ${variables.color.border}`,
        marginBottom: variables.spacing.lg,
      }}
    >
      <Heading fontSize="md" style={{ marginBottom: variables.spacing.sm }}>
        {company.title}
      </Heading>
      <List.Container
        testId={`ExperienceItem-list-${toCamelCase(company.title)}`}
      >
        {company.jobs
          .sort(
            (a, b) =>
              parseDate(b.startDate).getTime() -
              parseDate(a.startDate).getTime(),
          )
          .map(job => {
            const jobId = `${toCamelCase(company.title)}-${toCamelCase(job.title)}`;
            const isHighlighted = highlightedJobId === jobId;

            return (
              <List.Item
                key={job.id}
                id={jobId}
                style={{
                  transition: 'all 0.6s ease-in-out',
                  backgroundColor: isHighlighted
                    ? variables.color.highlight
                    : 'transparent',
                  borderRadius: isHighlighted ? variables.radii.lg : '0',
                  // Override the default List.Item padding and manage it ourselves
                  paddingTop: isHighlighted
                    ? variables.spacing.xl
                    : variables.spacing.lg,
                  paddingBottom: isHighlighted
                    ? variables.spacing.xl
                    : variables.spacing.lg,
                  paddingLeft: isHighlighted ? variables.spacing.md : '0',
                  paddingRight: isHighlighted ? variables.spacing.md : '0',
                  margin: isHighlighted ? `${variables.spacing.xs} 0` : '0',
                  boxShadow: isHighlighted
                    ? `0 0 0 2px ${variables.color.highlight}40`
                    : 'none',
                  transform: isHighlighted ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <Grid.Container rowGap="md" alignItems="baseline">
                  <Grid.Column
                    colStart={{ xs: '1' }}
                    colEnd={{ xs: '-1', md: '1' }}
                  >
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: variables.spacing.sm,
                      }}
                    >
                      <Heading
                        as="h3"
                        color={
                          isHighlighted ? 'highlight' : 'foregroundNeutral'
                        }
                        style={{
                          transition: 'color 0.3s ease-in-out',
                          color: isHighlighted
                            ? variables.color.foregroundInverted
                            : undefined,
                        }}
                      >
                        {job.title}
                      </Heading>
                      <Tooltip content="Copy link to this job">
                        <button
                          onClick={() => handleCopyJobLink(job.title)}
                          type="button"
                          data-testid={`${jobId}-copy-link`}
                          style={{
                            display: 'grid',
                            placeItems: 'center',
                            cursor: 'pointer',
                            width: '1.25rem',
                            height: '1.25rem',
                            borderRadius: variables.radii.md,
                            border: 'none',
                            background: 'transparent',
                            color: isHighlighted
                              ? variables.color.foregroundInverted
                              : variables.color.foregroundNeutral,
                            opacity: 0.7,
                            transition:
                              'opacity 0.2s ease, color 0.3s ease-in-out',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.opacity = '1';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.opacity = '0.7';
                          }}
                          onFocus={e => {
                            e.currentTarget.style.outline = 'transparent';
                          }}
                        >
                          <FeatherLink size={16} />
                        </button>
                      </Tooltip>
                    </Box>
                    <Text
                      color={isHighlighted ? 'foreground' : 'foregroundNeutral'}
                      fontSize="sm"
                      style={{
                        transition: 'color 0.3s ease-in-out',
                        color: isHighlighted
                          ? variables.color.foregroundInverted
                          : undefined,
                      }}
                    >
                      {job.location}
                    </Text>
                  </Grid.Column>
                  <Grid.Column
                    colStart={{ xs: '1', md: '2' }}
                    colEnd={{ xs: '-1', md: '4' }}
                  >
                    <Text
                      testId={`${toCamelCase(company.title)}-${toCamelCase(job.title)}-description`}
                      color={isHighlighted ? 'foreground' : undefined}
                      style={{
                        transition: 'color 0.3s ease-in-out',
                        color: isHighlighted
                          ? variables.color.foregroundInverted
                          : undefined,
                      }}
                    >
                      {job.description || 'No description yet'}
                    </Text>
                  </Grid.Column>
                  <Grid.Column
                    colStart={{ xs: '1', md: '4' }}
                    colEnd={{ xs: '-1', md: '4' }}
                  >
                    <Text
                      color={isHighlighted ? 'foreground' : 'foregroundNeutral'}
                      fontSize="sm"
                      testId={`${toCamelCase(company.title)}-${toCamelCase(job.title)}-date-range`}
                      style={{
                        transition: 'color 0.3s ease-in-out',
                        color: isHighlighted
                          ? variables.color.foregroundInverted
                          : undefined,
                      }}
                    >
                      {format(parseDate(job.startDate), 'MMM yyyy')} &mdash;{' '}
                      {job.endDate
                        ? format(parseDate(job.endDate), 'MMM yyyy')
                        : 'Now'}
                      <br />
                    </Text>
                  </Grid.Column>
                </Grid.Container>
              </List.Item>
            );
          })}
      </List.Container>
    </Box>
  );
}
