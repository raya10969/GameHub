import { defineConfig } from "@chakra-ui/react"
import { textStyles } from "./textStyles";

const config = defineConfig({
    theme: {
        textStyles,
        tokens: {
        }
    }
});

export default config;