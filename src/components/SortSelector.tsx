import { Menu, Button, Icon, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          Order by: Relevance
          <Icon size="xs">
            <BsChevronDown />
          </Icon>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <MenuItem value="item1">Item1</MenuItem>
          <MenuItem value="item1">Item1</MenuItem>
          <MenuItem value="item1">Item1</MenuItem>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
