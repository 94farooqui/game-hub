import { HStack, Image, Show, Text } from "@chakra-ui/react"
import logo from './../assets/game.png'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchBar from "./SearchBar"

interface Props{
  onSearch : (searchText : string | null) => void
}


const NavBar = ({onSearch} : Props) => {
  return (
    <div>
        <HStack padding='10px' spacing='10px'>
            <HStack>
              <Image boxSize='80px' src={logo}/>
              <Show above="lg">
                <Text whiteSpace='nowrap'>Game World</Text>
              </Show>
              
            </HStack>
            <SearchBar onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
        
    </div>
  )
}

export default NavBar