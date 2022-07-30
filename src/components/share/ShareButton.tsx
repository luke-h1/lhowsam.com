/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cx from 'classnames';
import {
  ButtonHTMLAttributes,
  Component,
  CSSProperties,
  MouseEvent,
  ReactNode,
  Ref,
} from 'react';

type NetworkLink<LinkOptions> = (url: string, options: LinkOptions) => string;

type WindowPosition = 'windowCenter' | 'screenCenter';

const isPromise = (obj: any | Promise<any>): boolean =>
  !!obj &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';

const getBoxPositionOnWindowCenter = (width: number, height: number) => ({
  left:
    window.outerWidth / 2 +
    (window.screenX || window.screenLeft || 0) -
    width / 2,
  top:
    window.outerHeight / 2 +
    (window.screenY || window.screenTop || 0) -
    height / 2,
});

const getBoxPositionOnScreenCenter = (width: number, height: number) => ({
  top: (window.screen.height - height) / 2,
  left: (window.screen.width - width) / 2,
});

function windowOpen(
  url: string,
  {
    height,
    width,
    ...configRest
  }: {
    height: number;
    width: number;
    [key: string]: any;
  },
  onClose?: (dialog: Window | null) => void,
) {
  const config: { [key: string]: string | number } = {
    height,
    width,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes',
    ...configRest,
  };

  const shareDialog = window.open(
    url,
    '',
    Object.keys(config)
      .map(key => `${key}=${config[key]}`)
      .join(', '),
  );

  if (onClose) {
    const interval = window.setInterval(() => {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onClose(shareDialog);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }, 1000);
  }
  return shareDialog;
}

interface CustomProps<LinkOptions> {
  children: ReactNode;
  className?: string;
  // disables click action & adds `disabled` class
  disabled?: boolean;
  /**
   * Style when button is disabled
   * @default { opacity: 0.6 }
   */
  disabledStyle?: CSSProperties;
  forwardedRef?: Ref<HTMLButtonElement>;
  networkName: string;
  networkLink: NetworkLink<LinkOptions>;
  onClick?: (event: MouseEvent<HTMLButtonElement>, link: string) => void;
  openShareDialogOnClick?: boolean;
  opts: LinkOptions;
  /**
   * URL of the shared page
   */
  url: string;
  style: CSSProperties;
  windowWidth?: number;
  windowHeight?: number;
  windowPosition?: WindowPosition;
  /**
   *  Takes a function that returns a Promise to be fulfilled before calling
   * `onClick`. If you do not return promise, `onClick` is called immediately.
   */
  beforeOnClick?: () => Promise<void> | void;
  /**
   * Takes a function to be called after closing share dialog.
   */
  onShareWindowClose?: () => void;
  resetButtonStyle?: boolean;
}

export type Props<LinkOptions> = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof CustomProps<LinkOptions>
> &
  CustomProps<LinkOptions>;

// TODO: LH - convert this to a stateless functional component

// eslint-disable-next-line react/prefer-stateless-function
export default class ShareButton<LinkOptions> extends Component<
  Props<LinkOptions>
> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    disabledStyle: { opacity: 0.6 },
    openShareDialogOnClick: true,
    resetButtonStyle: true,
  };

  openShareDialog = (link: string) => {
    const {
      onShareWindowClose,
      windowHeight = 400,
      windowPosition = 'windowCenter',
      windowWidth = 550,
    } = this.props;

    const windowConfig = {
      height: windowHeight,
      width: windowWidth,
      ...(windowPosition === 'windowCenter'
        ? getBoxPositionOnWindowCenter(windowWidth, windowHeight)
        : getBoxPositionOnScreenCenter(windowWidth, windowHeight)),
    };
    windowOpen(link, windowConfig, onShareWindowClose);
  };

  handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const {
      beforeOnClick,
      disabled,
      networkLink,
      onClick,
      url,
      openShareDialogOnClick,
      opts,
    } = this.props;

    const link = networkLink(url, opts);

    if (disabled) {
      // eslint-disable-next-line no-useless-return
      return;
    }
    event.preventDefault();

    if (beforeOnClick) {
      const returnVal = beforeOnClick();

      if (isPromise(returnVal)) {
        await returnVal;
      }
    }
    if (openShareDialogOnClick) {
      this.openShareDialog(link);
    }
    if (onClick) {
      onClick(event, link);
    }
  };

  public render() {
    const {
      beforeOnClick,
      children,
      className,
      disabled,
      disabledStyle,
      forwardedRef,
      networkLink,
      networkName,
      onShareWindowClose,
      openShareDialogOnClick,
      opts,
      resetButtonStyle,
      style,
      url,
      windowHeight,
      windowPosition,
      windowWidth,
      ...rest
    } = this.props;

    const newClassName = cx(
      'react-share__ShareButton',
      {
        'react-share__ShareButton--disabled': !!disabled,
        disabled: !!disabled,
      },
      className,
    );
    const newStyle = resetButtonStyle
      ? {
          backgroundColor: 'transparent',
          border: 'none',
          padding: 0,
          font: 'inherit',
          color: 'inherit',
          cursor: 'pointer',
          ...style,
          ...(disabled && disabledStyle),
        }
      : {
          ...style,
          ...(disabled && disabledStyle),
        };

    return (
      <button
        {...rest}
        aria-label={rest['aria-label'] || networkName}
        className={newClassName}
        onClick={this.handleClick}
        ref={forwardedRef}
        style={newStyle}
        type="button"
      >
        {children}
      </button>
    );
  }
}
