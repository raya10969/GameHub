import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeToggler from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onReturnHome: () => void;
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onReturnHome, onSearch }: NavBarProps) => {
  return (
    <HStack p="4">
      <Image cursor="pointer" onClick={onReturnHome} src={logo} width="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeToggler />
    </HStack>
  );
};

export default NavBar;
