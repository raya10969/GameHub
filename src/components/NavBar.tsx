import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeToggler from "./ColorModeSwitch";

interface NavBarProps {
  onReturnHome: () => void;
}

const NavBar = ({ onReturnHome }: NavBarProps) => {
  return (
    <HStack justify="space-between" p="4">
      <HStack>
        <Image
          cursor="pointer"
          onClick={onReturnHome}
          src={logo}
          width="60px"
        />
        <Text>Nav Bar</Text>
      </HStack>
      <ColorModeToggler />
    </HStack>
  );
};

export default NavBar;
