// CustomMarkdownInput.tsx
import { useMemo, type JSX } from 'react';
import { MarkdownInput, MarkdownInputProps } from 'sanity-plugin-markdown';

export default function CustomMarkdownInput(
  props: JSX.IntrinsicAttributes & MarkdownInputProps,
) {
  const reactMdeProps: MarkdownInputProps['reactMdeProps'] = useMemo(() => {
    return {
      options: {
        inputStyle: 'contenteditable', // fix for grammarly / native spell check not working
        // more options available, see:
        // https://github.com/Ionaru/easy-markdown-editor#options-list
      },
      // more props available, see:
      // https://github.com/RIP21/react-simplemde-editor#react-simplemde-easymde-markdown-editor
    };
  }, []);

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />;
}
