import { PartialPick } from '@frontend/types/style';
import Box, { BoxProps } from '../Box/Box';

export const Spacer = ({
  height,
  width,
}: PartialPick<BoxProps<'span'>, 'width' | 'height'>) => {
  return <Box as="span" display="block" height={height} width={width} />;
};
