import type { QueryNames } from "@/modules/queryNames";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  queryNames: QueryNames;
}

const GameHeading = ({ queryNames }: GameHeadingProps) => {
  const heading = `${queryNames.platform ?? ""} ${queryNames.genre ?? ""} Games`;
  return <Heading textStyle="h1">{heading}</Heading>;
};

export default GameHeading;
