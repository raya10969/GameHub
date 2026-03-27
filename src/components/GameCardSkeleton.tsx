import { Card, Skeleton, Stack } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root overflow="hidden">
      <Skeleton height="48"></Skeleton>
      <Card.Body>
        <Stack>
          <Skeleton height="3"></Skeleton>
          <Skeleton height="3"></Skeleton>
          <Skeleton height="3" width="80%"></Skeleton>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
