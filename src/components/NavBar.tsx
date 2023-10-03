import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logoreact from "../assets/food2.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import apiClient from "../services/api-client";

const NavBar = () => {
  return (
    <>
      <HStack justify="space-between" padding="10px">
        <Image src={logoreact} boxSize="60px" />
        <Text>SAI KESHAVI</Text>
        <Text>SAKEETH THA</Text>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};
export default NavBar;
