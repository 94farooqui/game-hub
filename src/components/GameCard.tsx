
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import GameRating from './GameRating'
import getCroppedImageUrl from '../services/image-url'

interface Props{
    game : Game
}
const GameCard = ({game} : Props) => {
  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent='space-between'>
              <PlatformIconList platform={game.parent_platforms.map(p=> p.platform)} />
              <GameRating score={game.metacritic}/>
            </HStack>
            
        </CardBody>
    </Card>
  )
}

export default GameCard