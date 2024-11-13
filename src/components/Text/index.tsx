import { sprinkles, Sprinkles } from '@frontend/styles/sprinkles.css';
import { PolymorphicComponentProps } from '@frontend/types/style';
import clsx from 'clsx';
// eslint-disable-next-line camelcase
import { Instrument_Serif } from 'next/font/google';
import { createElement, ElementType } from 'react';
import * as styles from './Text.css';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  display: 'swap',
  subsets: ['latin'],
});

type TextProps<TElement extends ElementType> = PolymorphicComponentProps<
  TElement,
  {
    as?: 'p' | 'span' | 'strong' | 'em' | 'time';
    fontFamily?: Sprinkles['fontFamily'];
    fontSize?: Sprinkles['fontSize'];
    fontWeight?: Sprinkles['fontWeight'];
    color?: Extract<Sprinkles['color'], 'foreground' | 'foregroundNeutral'>;
    maxWidth?: Sprinkles['maxWidth'];
    gradient?: boolean;
    testId?: string;
  }
>;

export default function Text<TElement extends ElementType = 'p'>({
  as,
  fontFamily,
  fontSize = 'md',
  fontWeight = 'normal',
  color = 'foreground',
  gradient = false,
  maxWidth = 'prose',
  testId,
  ...rest
}: TextProps<TElement>) {
  const component = as || 'p';

  return createElement(component, {
    className: clsx(
      sprinkles({
        maxWidth,
        fontFamily,
        fontSize,
        fontWeight,
        color,
      }),
      {
        [styles.gradient]: gradient,
        [instrumentSerif.className]: fontFamily === 'serif',
      },
    ),
    'data-testid': testId,
    ...rest,
  });
}
