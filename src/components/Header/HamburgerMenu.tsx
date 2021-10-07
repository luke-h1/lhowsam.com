import { Box, useColorMode } from '@chakra-ui/react';
import { Turn as Hamburger } from 'hamburger-react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  toggled: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

const HamburgerMenu = ({ toggled, toggle }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box display={{ lg: 'none' }}>
        <Hamburger
          hideOutline={false}
          label="hamburger menu"
          size={25}
          toggled={toggled}
          color={colorMode === 'light' ? '#000' : '#fff'}
          toggle={toggle}
          direction="right"
        />
      </Box>
    </>
  );
};

export default HamburgerMenu;
