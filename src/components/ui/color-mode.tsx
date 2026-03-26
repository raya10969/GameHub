import { ClientOnly } from "@chakra-ui/react"
import type { ReactNode } from "react"
import { ThemeProvider, useTheme } from "next-themes"

export function ColorModeProvider(props: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {props.children}
    </ThemeProvider>
  )
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()
  const colorMode = resolvedTheme === "dark" ? "dark" : "light"

  const toggleColorMode = () => {
    setTheme(colorMode === "light" ? "dark" : "light")
  }

  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export { ClientOnly }