
import { GameQauery } from '../App'
import { Box, Heading } from '@chakra-ui/react';

interface Props{
    gameQuery : GameQauery;
}

const GameHeading = ({gameQuery} : Props) => {

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games` 
  return (
    <Box paddingX={5} marginBottom={2}>
        <Heading as='h1' >{heading}</Heading>
    </Box>
    
  )
}

export default GameHeading