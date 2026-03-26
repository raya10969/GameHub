import { Button, Skeleton } from "@chakra-ui/react"
import { ClientOnly, useColorMode } from "@/components/ui/color-mode"

const ColorModeToggler = () => {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <ClientOnly fallback={<Skeleton height="40px" width="96px" borderRadius="md" />}>
            <Button onClick={toggleColorMode} variant="outline" size="sm">
                {colorMode === "light" ? "Switch to dark" : "Switch to light"}
            </Button>
        </ClientOnly>
    )
}

export default ColorModeToggler