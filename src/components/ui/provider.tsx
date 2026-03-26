import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { ColorModeProvider } from "@/components/ui/color-mode"
import config from "@/components/ui/theme"

const system = createSystem(defaultConfig, config)

export function Provider(props: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>{props.children}</ColorModeProvider>
    </ChakraProvider>
  )
}
