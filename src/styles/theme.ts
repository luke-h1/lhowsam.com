import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Raleway, -apple-system',
    heading: 'Poppins, -apple-system',
  },
  useSystemColorMode: false,
});
export default theme;
