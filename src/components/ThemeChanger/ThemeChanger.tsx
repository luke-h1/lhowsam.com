'use client';

import { useMounted } from '@frontend/hooks/useMounted';
import { useTheme } from 'next-themes';
import { Fragment, useState } from 'react';
import s from './ThemeChanger.module.scss';

const themes = ['light', 'dark', 'system'] as const;

type Theme = (typeof themes)[number];

const getIcon = (theme: Theme) => {
  switch (theme) {
    case 'light': {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          >
            <g
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              transform="translate(-1045 -55)"
            >
              <g transform="translate(1046 56)">
                <path d="M12 17.455a5.455 5.455 0 100-10.91 5.455 5.455 0 000 10.91zM12 0v2.182m0 19.636V24M3.513 3.513l1.549 1.549m13.876 13.876l1.55 1.55M0 12h2.182m19.636 0H24M3.513 20.487l1.549-1.549M18.938 5.062l1.55-1.55" />
              </g>
            </g>
          </g>
        </svg>
      );
    }

    case 'dark': {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g
              fill="currentColor"
              fillRule="nonzero"
              transform="translate(-994 -56)"
            >
              <g transform="translate(994.898 56.898)">
                <path d="M10.555.005A11.624 11.624 0 1023.199 12.65c.088-.948-.986-1.554-1.752-.988a7.082 7.082 0 01-9.905-9.904c.566-.766-.04-1.84-.987-1.753z" />
              </g>
            </g>
          </g>
        </svg>
      );
    }

    default: {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g
              fill="currentColor"
              fillRule="nonzero"
              transform="translate(-1108 -57)"
            >
              <g transform="translate(972.38 43)">
                <path d="M146.62 14c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm0 3.143v15.714a7.857 7.857 0 000-15.714z" />
              </g>
            </g>
          </g>
        </svg>
      );
    }
  }
};

const ThemeChanger = () => {
  const { isMounted } = useMounted();
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState('');
  const { setTheme, theme } = useTheme();

  if (!isMounted) {
    return <div className={s.wrapper} />;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.menu}>
        {active && <div className={s.bg} />}
        {themes.map(variant => {
          const selected = theme === variant;
          const isHovered = hovered === variant;

          return (
            <Fragment key={variant}>
              {(selected || active) && (
                <button
                  type="button"
                  onMouseEnter={() => setHovered(variant)}
                  title={variant}
                  key={variant}
                  className={s.button}
                  onClick={() => {
                    if (!active) {
                      return setActive(true);
                    }
                    setActive(false);
                    return setTheme(variant);
                  }}
                >
                  {((!active && selected) || isHovered) && (
                    <span className={s.buttonBackground} />
                  )}
                  <span className={s.buttonLabel}>{getIcon(variant)}</span>
                </button>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default ThemeChanger;
