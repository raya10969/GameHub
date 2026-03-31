import type { Game } from "@/modules/game";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const parentPlatforms = game.parent_platforms ?? [];

  return (
    <Card.Root overflow="hidden">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={`Background image of ${game.name}`}
      />
      <Card.Body>
        <HStack justifyContent="space-between" mb="3">
          <PlatformIconList
            platforms={parentPlatforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
