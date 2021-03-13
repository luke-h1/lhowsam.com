import React from "react";
import {
  Box,
  Stack,
  useCheckbox,
  useCheckboxGroup,
  useStyleConfig,
} from "@chakra-ui/react";

interface TagListProps {}

function TagButton(props) {
  const { getCheckboxProps, getInputProps } = useCheckbox(props);
  const tagStyles = useStyleConfig("TagButton", props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box {...checkbox} {...tagStyles}>
        #{props.value}
      </Box>
    </Box>
  );
}

export const TagList: React.FC<TagListProps> = ({ tags, value, onChange }) => {
  const { getCheckboxProps } = useCheckboxGroup({
    value,
    onChange,
  });

  return (
    <Stack direction="row" spacing={4}>
      {tags.map((value) => {
        const tag = getCheckboxProps({ value });
        return <TagButton key={value} {...tag} />;
      })}
    </Stack>
  );
};
