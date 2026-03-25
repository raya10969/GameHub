import { ChakraProvider } from '@chakra-ui/react'
import { createSystem, defaultConfig } from '@chakra-ui/react'
import type { ReactNode } from 'react'

const system = createSystem(defaultConfig)

export function Provider(props: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      {props.children}
    </ChakraProvider>
  )
}
