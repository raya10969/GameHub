import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number | null;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  if (score === null) {
    return (
      <Badge size="md" px="3" borderRadius="md" colorPalette="gray">
        N/A
      </Badge>
    );
  }

  const color = score > 85 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge size="md" px="3" borderRadius="md" colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
