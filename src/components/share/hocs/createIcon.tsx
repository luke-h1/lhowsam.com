import { CSSProperties, SVGProps } from 'react';

type Props = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  bgStyle?: CSSProperties;
  borderRadius?: number;
  iconFillColor?: string;
  round?: boolean;
  size?: number | string;
};

interface IconConfig {
  color: string;
  networkName: string;
  // svg path
  path: string;
}

export default function createIcon(iconConfig: IconConfig) {
  const Icon = ({
    bgStyle,
    borderRadius,
    iconFillColor,
    round,
    size,
    ...rest
  }: Props) => (
    <svg viewBox="0 0 64 64" width={size} height={size} {...rest}>
      {round ? (
        <circle
          cx="32"
          cy="32"
          r="31"
          fill={iconConfig.color}
          style={bgStyle}
        />
      ) : (
        <rect
          width="64"
          height="64"
          rx={borderRadius}
          ry={borderRadius}
          fill={iconConfig.color}
          style={bgStyle}
        />
      )}
      <path d={iconConfig.path} fill={iconFillColor} />
    </svg>
  );
  Icon.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: '#fff',
    size: 64,
  };
  return Icon;
}
