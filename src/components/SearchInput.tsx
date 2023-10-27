import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref1 = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref1.current) onSearch(ref1.current.value);
      }}
    >
      <InputGroup>
        <InputLeftAddon children={<BsSearch />} />
        <Input
          ref={ref1}
          borderRadius={20}
          placeholder={"Search games..."}
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
