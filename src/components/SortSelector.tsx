import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onselectSortOrder: (category: string | null) => void;
  selectedCategory: String | null;
}

const SortSelector = ({ onselectSortOrder, selectedCategory }: Props) => {
  const sortorders = [
    { value: "", label: "Relavance" },
    { value: "added", label: "Date added" },
    { value: "-released", label: "Date released" },
    { value: "created", label: "Date created" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "By ratings" },
  ];
  const SelectedCategory = sortorders.find(
    (item) => item.value == selectedCategory
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by : {SelectedCategory ? SelectedCategory.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortorders.map((category) => (
          <MenuItem
            key={category.value}
            value={category.value}
            onClick={() => onselectSortOrder(category.value)}
          >
            {category.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
