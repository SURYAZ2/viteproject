import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logoreact from "../assets/food2.jpg";
import ColorModeSwitch from "./colorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={logoreact} boxSize="60px" />
        <Text>NavBar</Text>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
