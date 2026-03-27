import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Box, HStack, Image, Text, Skeleton } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (isLoading)
    return (
      <Box as="ul">
        {skeletons.map((skeleton) => (
          <Box as="li" key={skeleton} py={2}>
            <HStack>
              <Skeleton boxSize={9} borderRadius={5} />
              <Skeleton width="80%" height={3} />
            </HStack>
          </Box>
        ))}
      </Box>
    );

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
