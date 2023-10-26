import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logoreact from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import apiClient from "../services/api-client";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logoreact} boxSize="60px" />
        <SearchInput />
        {/* <Text fontSize={"2xl"}>Rawg Games</Text> */}
        <ColorModeSwitch />
      </HStack>
    </>
  );
};
export default NavBar;
