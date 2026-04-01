import useGenres from "@/hooks/useGenres";
import { type Genre } from "@/modules/genre";
import getCroppedImageUrl from "@/services/image-url";
import {
  Box,
  HStack,
  Image,
  Skeleton,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  SelectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, SelectedGenre }: GenreListProps) => {
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
    <>
      <Heading fontSize="2xl" my="3">
        Genres
      </Heading>
      <Box as="ul" position="sticky" top="0" alignSelf="flex-start">
        {data?.results.map((genre) => (
          <Box as="li" key={genre.id} py={2}>
            <HStack>
              <Image
                boxSize={9}
                borderRadius={5}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                width="80%"
                variant="ghost"
                justifyContent="flex-start"
              >
                <Text
                  textAlign="left"
                  fontSize={genre.id === SelectedGenre?.id ? "xl" : "lg"}
                  fontWeight={
                    genre.id === SelectedGenre?.id ? "bold" : "normal"
                  }
                  whiteSpace="wrap"
                  lineHeight={1.5}
                >
                  {genre.name}
                </Text>
              </Button>
            </HStack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
