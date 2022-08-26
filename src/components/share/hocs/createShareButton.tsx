import { Ref, forwardRef } from 'react';
import ShareButton, { Props as ShareButtonProps } from '../ShareButton';

function createShareButton<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OptionProps extends Record<string, any>,
  LinkOptions = OptionProps,
>(
  networkName: string,
  link: (url: string, options: LinkOptions) => string,
  optsMap: (props: OptionProps) => LinkOptions,
  defaultProps: Partial<ShareButtonProps<LinkOptions> & OptionProps>,
) {
  type Props = Omit<
    ShareButtonProps<LinkOptions>,
    'forwardedRef' | 'networkName' | 'networkLink' | 'opts'
  > &
    OptionProps;

  function CreatedButton(props: Props, ref: Ref<HTMLButtonElement>) {
    const opts = optsMap(props);
    const passedProps = { ...props };

    // remove keys from passed props that are passed as `opts`;
    const optsKey = Object.keys(opts as object);
    optsKey.forEach(key => {
      delete (passedProps as never)[key];
    });
    return (
      <ShareButton<LinkOptions>
        {...defaultProps}
        {...passedProps}
        forwardedRef={ref}
        networkName={networkName}
        networkLink={link}
        opts={optsMap(props)}
      />
    );
  }
  CreatedButton.displayName = `ShareButton-${networkName}`;

  return forwardRef<HTMLButtonElement, Props>(CreatedButton);
}
export default createShareButton;
