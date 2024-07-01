import { Job } from '@frontend/types/experience';
import * as Grid from '../Grid/Grid';
import { List } from '../List/List';

interface Props {
  job: Job;
}

const ExperienceItem = ({ job }: Props) => {
  return (
    <List.Item>
      <Grid.Container rowGap="md" alignItems="baseline"></Grid.Container>
    </List.Item>
  );
};

export default ExperienceItem;
