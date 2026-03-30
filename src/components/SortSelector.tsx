import { Menu, Button, Icon, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectedOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ sortOrder, onSelectedOrder }: SortSelectorProps) => {
  const sortOrders = [
    { value: "", label: "Relevant" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Metacritic" },
    { value: "-rating", label: "Average rating" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          Order by: {currentSortOrder?.label || "Relevant"}
          <Icon size="xs">
            <BsChevronDown />
          </Icon>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectedOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
