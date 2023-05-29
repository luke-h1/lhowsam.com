'use client';

import Box from './(components)/Box/Box';
import Heading from './(components)/Heading/Heading';
import Spacer from './(components)/Spacer/Spacer';
import Text from './(components)/Text/Text';

const Error = () => {
  return (
    <Box
      as="header"
      textAlign={{ md: 'center' }}
      maxWidth="container"
      marginX="auto"
    >
      <Heading fontSize={{ xs: 'xxl', sm: 'xxxl' }} as="h1">
        500 - Internal server error
      </Heading>
      <Spacer height="xl" />
      <Text
        fontSize={{ xs: 'lg', sm: 'xl' }}
        color="foregroundNeutral"
        style={{ display: 'inline-flex' }}
      >
        Internal server error.{' '}
      </Text>
    </Box>
  );
};

export default Error;
