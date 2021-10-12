import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  useSystemColorMode: true,
  fonts: {
    body: 'Raleway',
    heading: 'Poppins',
  },
  global: () => ({
    body: {
      fontFamily: 'Raleway',
    },
  }),
});
export default theme;
