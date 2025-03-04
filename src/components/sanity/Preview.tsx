// studio/component/preview.tsx
import {
  Box,
  Button,
  Card,
  Flex,
  Spinner,
  Text,
  ThemeProvider,
} from '@sanity/ui';
import { useEffect, useState, useRef } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { SanityDocument } from 'sanity';
import resolveProductionUrl from './util/resolveProductionUrl';

export function PreviewIFrame(props: {
  options: unknown;
  document: SanityDocument;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { options, document } = props;
  const [id, setId] = useState(1);
  const { displayed } = document;
  const [displayUrl, setDisplayUrl] = useState('');
  const iframe = useRef<HTMLIFrameElement>(null);

  function handleReload() {
    if (!iframe?.current) {
      return;
    }
    setId(id + 1);
  }
  useEffect(() => {
    function getUrl() {
      const productionUrl =
        resolveProductionUrl(displayed as unknown as SanityDocument) ?? '';
      setDisplayUrl(productionUrl);
    }
    getUrl();
  }, [displayed]);

  if (displayUrl === '') {
    return (
      <ThemeProvider>
        <Flex padding={5} align="center" justify="center">
          <Spinner />
        </Flex>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Flex direction="column" style={{ height: `100%` }}>
        <Card padding={2} borderBottom>
          <Flex align="center" gap={2}>
            <Box flex={1}>
              <Text size={0} textOverflow="ellipsis">
                {displayUrl}
              </Text>
            </Box>
            <Flex align="center" gap={1}>
              <Button
                fontSize={[1]}
                padding={2}
                icon={AiOutlineReload}
                title="Reload"
                text="Reload"
                aria-label="Reload"
                onClick={() => handleReload()}
              />
              <Button
                fontSize={[1]}
                icon={BiLinkExternal}
                padding={[2]}
                text="Open"
                tone="primary"
                onClick={() => window.open(displayUrl)}
              />
            </Flex>
          </Flex>
        </Card>
        <Card tone="transparent" padding={0} style={{ height: `100%` }}>
          <Flex align="center" justify="center" style={{ height: `100%` }}>
            <iframe
              key={id}
              ref={iframe}
              title="preview"
              style={{ width: '100%', height: `100%`, maxHeight: `100%` }}
              src={displayUrl}
              referrerPolicy="origin-when-cross-origin"
              frameBorder={0}
            />
          </Flex>
        </Card>
      </Flex>
    </ThemeProvider>
  );
}
