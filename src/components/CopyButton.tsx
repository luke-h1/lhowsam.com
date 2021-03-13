import React from "react";
import { Button, useClipboard } from "@chakra-ui/react";

interface CopyButtonProps {}

export const CopyButton: React.FC<CopyButtonProps> = ({ value }) => {
  const { onCopy, hasCopied } = useClipboard(value);

  return (
    <Button aria-label="Copy text" role="button" onClick={onCopy}>
      {hasCopied ? "Copied" : "Copy"}
    </Button>
  );
};
