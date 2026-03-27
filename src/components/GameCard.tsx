import type { Game } from "@/modules/Game";
import { Card, Heading, Image } from "@chakra-ui/react";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root overflow="hidden">
      <Image
        src={game.background_image}
        alt={`Background image of ${game.name}`}
      />
      <Card.Body>
        <Heading>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
