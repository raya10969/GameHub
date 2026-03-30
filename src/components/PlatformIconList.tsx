import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";
import type { Platform } from "@/modules/platform";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface IconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: IconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <HStack my="1">
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        if (!IconComponent) return null;

        return (
          <Icon as={IconComponent} key={platform.id} color="gray.500"></Icon>
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
