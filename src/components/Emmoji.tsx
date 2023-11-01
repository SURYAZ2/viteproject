import { Image, ImageProps } from "@chakra-ui/react";
import React from "react";
import bullseye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";
import logo from "../assets/logo.jpg";
interface Props {
  ratings: number;
}
const Emmoji = ({ ratings }: Props) => {
  if (ratings < 3) return "";

  const emmojimap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: 25 },
    4: { src: thumbsup, alt: "recommended", boxSize: 25 },
    5: { src: bullseye, alt: "excellent", boxSize: 35 },
  };
  return <Image {...emmojimap[ratings]} marginTop={1} />;
};

export default Emmoji;
