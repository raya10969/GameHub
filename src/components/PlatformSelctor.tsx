import usePlatformById from "@/hooks/usePlatformById";
import usePlatforms from "@/hooks/usePlatforms";
import type { Platform } from "@/modules/platform";
import { Button, Icon, Menu, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface PlatformSelctorProps {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelctor = ({
  selectedPlatformId,
  onSelectPlatform,
}: PlatformSelctorProps) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatformById(selectedPlatformId)

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          {selectedPlatform?.name ?? "Platforms"}
          <Icon size="xs">
            <BsChevronDown />
          </Icon>
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {data?.results.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
              value={platform.slug}
            >
              {platform.name}
            </MenuItem>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelctor;
