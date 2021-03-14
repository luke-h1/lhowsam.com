import React from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

interface Iprops {
  children: string;
  isLast?: Boolean;
  href: string;
}

const MenuItem: React.FC<Iprops> = ({
  children, isLast, href, ...rest
}) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Text>
  );
};
export default MenuItem;
