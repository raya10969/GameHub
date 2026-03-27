import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <Box as="ul">
      {data.map((genre) => (
        <Box as="li" key={genre.id} py={2}>
          <HStack>
            <Image
              boxSize={9}
              borderRadius={5}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </Box>
      ))}
    </Box>
  );
};

export default GenreList;
