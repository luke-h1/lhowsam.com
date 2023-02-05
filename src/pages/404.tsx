import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import Spacer from '@frontend/components/Spacer/Spacer';
import Text from '@frontend/components/Text/Text';
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <Box
      as="header"
      textAlign={{ md: 'center' }}
      maxWidth="container"
      marginX="auto"
    >
      <Heading fontSize={{ xs: 'xxl', sm: 'xxxl' }} as="h1">
        404 - Page Not Found
      </Heading>
      <Spacer height="xl" />
      <Text
        fontSize={{ xs: 'lg', sm: 'xl' }}
        color="foregroundNeutral"
        style={{ display: 'inline-flex' }}
      >
        Page not found.{' '}
      </Text>
    </Box>
  );
};

export default NotFoundPage;
