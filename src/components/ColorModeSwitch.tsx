import { HStack, Switch } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"

const ColorModeToggler = () => {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <HStack>
            <Switch.Root checked={colorMode==="dark"} onCheckedChange={toggleColorMode} size={"sm"} colorPalette={'green'}>
                <Switch.HiddenInput />
                <Switch.Control />
                <Switch.Label>DarkMode</Switch.Label>
            </Switch.Root>
        </HStack>
    )
}

export default ColorModeToggler