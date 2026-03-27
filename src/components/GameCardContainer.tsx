import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box width="xs" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
