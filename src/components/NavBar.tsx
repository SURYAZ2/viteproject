import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logoreact from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import apiClient from "../services/api-client";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding="10px">
        <Image src={logoreact} boxSize="60px" />
        <SearchInput onSearch={onSearch} />
        {/* <Text fontSize={"2xl"}>Rawg Games</Text> */}
        <ColorModeSwitch />
      </HStack>
    </>
  );
};
export default NavBar;
