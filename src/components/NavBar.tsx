import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeToggler from "./ColorModeSwitch"

const NavBar = () => {
    return (
        <HStack justify="space-between" p='4'>
            <HStack>
                <Image src={logo} width="60px" />
                <Text>Nav Bar</Text>
            </HStack>
            <ColorModeToggler />
        </HStack>
    )
}

export default NavBar