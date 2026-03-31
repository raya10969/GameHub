import bullEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, type ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number | null;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (!rating || rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", h: "25px" },
    4: { src: thumbsUp, alt: "recommended", h: "25px" },
    5: { src: bullEye, alt: "exceptional", h: "30px" },
  };

  return <Image {...emojiMap[rating]} mt="1" />;
};

export default Emoji;
