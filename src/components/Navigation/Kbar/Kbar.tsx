import { isServer } from '@frontend/hooks/isServer';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import {
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  useMatches,
  KBarResults,
} from 'kbar';
import styles from './Kbar.module.scss';
import KbarHeaderBrowser from './KbarHeaderBrowser/KbarHeaderBrowser';
import KbarInput from './KbarInput/KbarInput';
import useHelperActions from './hooks/useHelperActions';
import useNavActions from './hooks/useNavActions';

const Kbar = () => {
  const { results } = useMatches();
  useNavActions();
  useHelperActions();

  const getKbarMaxHeight = () => {
    if (!isServer) {
      const TABLET_MINIMUM_WIDTH = 639;
      const KBAR_HEADER_HEIGHT = 120;

      return document.documentElement.clientWidth < TABLET_MINIMUM_WIDTH
        ? window.innerHeight - KBAR_HEADER_HEIGHT
        : undefined;
    }
    return undefined;
  };

  return (
    <KBarPortal>
      <FocusTrap>
        <div id="kbar-navigation" className={styles.wrapper}>
          <KBarPositioner className={styles.positioner}>
            <KBarAnimator className={styles.animator} data-testid="kbar">
              <KbarHeaderBrowser />
              <KbarInput />
              <KBarResults
                maxHeight={getKbarMaxHeight()}
                items={results}
                // eslint-disable-next-line react/no-unstable-nested-components
                onRender={({ item, active }) =>
                  typeof item === 'string' ? (
                    <div className={styles.group}>{item}</div>
                  ) : (
                    <div className={styles.itemWrapper}>
                      <div
                        className={classNames(styles.item, {
                          [styles.itemActive]: active,
                        })}
                      >
                        <div className={styles.nameWrapper}>
                          {item.icon && (
                            <div className={styles.icon}>{item.icon}</div>
                          )}
                          {item.name}
                        </div>
                        {item.shortcut && (
                          <kbd className={styles.shortcut}>{item.shortcut}</kbd>
                        )}
                      </div>
                    </div>
                  )
                }
              />
            </KBarAnimator>
          </KBarPositioner>
        </div>
      </FocusTrap>
    </KBarPortal>
  );
};

export default Kbar;
