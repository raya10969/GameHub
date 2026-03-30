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
    <Card.Root>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={`Background image of ${game.name}`}
      />
      <Card.Body>
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={parentPlatforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
