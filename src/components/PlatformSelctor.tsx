import usePlatforms from "@/hooks/usePlatforms";
import { Button, Icon, Menu, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlantformSelctor = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          Platfoms
          <Icon size="xs">
            <BsChevronDown />
          </Icon>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data.map((platform) => (
            <MenuItem key={platform.id} value={platform.slug}>
              {platform.name}
            </MenuItem>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlantformSelctor;
