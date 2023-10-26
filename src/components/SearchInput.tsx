import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftAddon children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder={"Search games..."}
        variant={"filled"}
      />
      <InputRightAddon children={<BsSearch />} />
    </InputGroup>
  );
};

export default SearchInput;
