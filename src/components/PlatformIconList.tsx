import { HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import {MdPhoneIphone} from 'react-icons/md'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from "react-icons";

interface Props{
    platform : Platform[]
}


const PlatformIconList = ({platform} : Props) => {

    const iconMap : {[Key: string] : IconType} = {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        mac : FaApple,
        linux : FaLinux,
        android : FaAndroid,
        ios : MdPhoneIphone,
        web : BsGlobe
    }
  return (
    <HStack marginY={3}>
         {platform.map((platform)=><Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />)}
    </HStack>
  )
}

export default PlatformIconList