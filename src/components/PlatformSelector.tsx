import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
  import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props {
    onselectPlatform: (platform : Platform | null) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onselectPlatform, selectedPlatform } : Props) => {
   const { data, error, isLoading } = usePlatforms()
  return (
    <Menu>
<MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || "platforms" }</MenuButton>
<MenuList>
    {data.map((platform)=> (<MenuItem key={platform.id} onClick={()=>onselectPlatform(platform)}>{platform.name}</MenuItem> ))}
    
</MenuList>
    </Menu>

  )
}

export default PlatformSelector