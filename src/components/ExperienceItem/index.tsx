import * as Grid from '@frontend/components/Grid';
import * as List from '@frontend/components/List';
import { Company } from '@frontend/config/jobs';
import { variables } from '@frontend/styles/variables.css';
import { parseDate } from '@frontend/utils/date';
import toCamelCase from '@frontend/utils/toCamelCase';
import { format } from 'date-fns';
import Box from '../Box';
import Heading from '../Heading';
import Text from '../Text';

interface Props {
  company: Company;
}

export default function ExperienceItem({ company }: Props) {
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
          .map(job => (
            <List.Item key={job.id}>
              <Grid.Container rowGap="md" alignItems="baseline">
                <Grid.Column
                  colStart={{ xs: '1' }}
                  colEnd={{ xs: '-1', md: '1' }}
                >
                  <Heading as="h3" color="foregroundNeutral">
                    {job.title}
                  </Heading>
                  <Text color="foregroundNeutral" fontSize="sm">
                    {job.location}
                  </Text>
                </Grid.Column>
                <Grid.Column
                  colStart={{ xs: '1', md: '2' }}
                  colEnd={{ xs: '-1', md: '4' }}
                >
                  <Text
                    testId={`${toCamelCase(company.title)}-${toCamelCase(job.title)}-description`}
                  >
                    {job.description || 'No description yet'}
                  </Text>
                </Grid.Column>
                <Grid.Column
                  colStart={{ xs: '1', md: '4' }}
                  colEnd={{ xs: '-1', md: '4' }}
                >
                  <Text
                    color="foregroundNeutral"
                    fontSize="sm"
                    testId={`${toCamelCase(company.title)}-${toCamelCase(job.title)}-date-range`}
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
          ))}
      </List.Container>
    </Box>
  );
}
