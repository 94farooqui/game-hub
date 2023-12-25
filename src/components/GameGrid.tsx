import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkelton from "./GameCardSkelton"
import GameCardContainer from "./GameCardContainer"
import { GameQauery } from "../App"

interface Props{
  gameQuery : GameQauery;
}

export const GameGrid = ({gameQuery}:Props) => {

    const {data , error, isLoading} = useGames(gameQuery)
    const skeltons = [1,2,3,4,5,6]

    if(isLoading){
      return(
        <SimpleGrid padding={15} columns={{
          sm : 1 , md:2, lg:3, xl:4
      }} spacing={5}>
          
          {skeltons.map(skelton => <GameCardContainer key={skelton}> <GameCardSkelton /></GameCardContainer>)}
      </SimpleGrid>
       
      )
    }
  
  return (
    <>
    
    {error && <Text>{error}</Text>}
    <SimpleGrid padding={15} columns={{
        sm : 1 , md:2, lg:3, xl:4
    }} spacing={5}>
        
        {data.map(game =><GameCardContainer key={game.id}> <GameCard  game={game} /></GameCardContainer>)}
    </SimpleGrid>
    </>
  )
}
