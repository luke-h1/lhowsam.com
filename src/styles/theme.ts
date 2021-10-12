import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
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
