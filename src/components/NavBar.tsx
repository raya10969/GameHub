import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeToggler from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onReturnHome: () => void;
}

const NavBar = ({ onReturnHome }: NavBarProps) => {
  return (
    <HStack p="4">
      <Image cursor="pointer" onClick={onReturnHome} src={logo} width="60px" />
      <SearchInput />
      <ColorModeToggler />
    </HStack>
  );
};

export default NavBar;
