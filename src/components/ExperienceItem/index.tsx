// import { variables } from '@frontend/styles/variables.css';
// import { Job } from '@frontend/types/experience';
// import { formatTags } from '@frontend/utils/formatTags';
// import * as Grid from '../Grid/Grid';
// import { Heading } from '../Heading/Heading';
// import Link from '../Link/Link';
// import { List } from '../List/List';
// import { Spacer } from '../Spacer/Spacer';
// import { Text } from '../Text/Text';
// import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

// interface Props {
//   jobs: Job[];
// }

// const ExperienceItem = ({ jobs }: Props) => {
//   const orderedJobs = jobs.sort((a, b) => {
//     const aStartDate = new Date(
//       a.startDate.split('-').reverse().join('-'),
//     ).getTime();
//     const bStartDate = new Date(
//       b.startDate.split('-').reverse().join('-'),
//     ).getTime();
//     return bStartDate - aStartDate;
//   });

//   return (
//     <>
//       <Grid.Container rowGap="md" alignItems="center">
//         <Grid.Column
//           colStart={{ xs: '1', md: '2' }}
//           colEnd={{ xs: '-1', md: '4' }}
//         >
//           <Heading fontSize="lg">Experience &not;</Heading>
//         </Grid.Column>
//       </Grid.Container>
//       <Spacer height="xl" />
//       <List>
//         {orderedJobs &&
//           orderedJobs.map(job => (
//             <List.Item key={job.id}>
//               <Grid.Container rowGap="md" alignItems="center">
//                 <Grid.Column
//                   colStart={{ xs: '1' }}
//                   colEnd={{ xs: '-1', md: '1' }}
//                 >
//                   <Heading>{job.company}</Heading>
//                   <Heading as="h3">{job.title}</Heading>
//                   <Grid.Column
//                     colStart={{ xs: '1', md: '4' }}
//                     colEnd={{ xs: '-1', md: '4' }}
//                   >
//                     {' '}
//                     <Text color="foregroundNeutral" fontSize="sm">
//                       <VisuallyHidden>Duration</VisuallyHidden>
//                       {job.startDate} &mdash;
//                       {job.endDate ? job.endDate : 'Present'}
//                     </Text>
//                   </Grid.Column>
//                 </Grid.Column>
//                 <Grid.Column
//                   colStart={{ xs: '1', md: '2' }}
//                   colEnd={{ xs: '-1', md: '4' }}
//                 >
//                   <Text style={{ marginTop: variables.spacing.lg }}>
//                     {job.description}
//                     {job.slug && (
//                       <>
//                         {' '}
//                         <Link href={`/experience/${job.slug}`}>Read more</Link>
//                       </>
//                     )}
//                   </Text>
//                   {job.tags ? (
//                     <>
//                       <Spacer height="sm" />
//                       <Text fontSize="sm" color="foregroundNeutral">
//                         <VisuallyHidden>Tools used:</VisuallyHidden>
//                         {formatTags(job.tags)}
//                       </Text>
//                     </>
//                   ) : null}
//                 </Grid.Column>
//               </Grid.Container>
//             </List.Item>
//           ))}
//         <Spacer height="xxl" />
//       </List>
//     </>
//   );
// };

// export default ExperienceItem;
