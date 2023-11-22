import {
  Divider,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useStore } from "zustand";
import ContentDivider from "../components/ContentDivider";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameGrid from "../components/GameGrid";
import GameImages from "../components/GameImages";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";
import useGames from "../hooks/useGames";
import useTrailers from "../hooks/useTrailers";
import useGameStore from "../stores/store";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner></Spinner>;

  if (error) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading marginBottom={4}>{game.name}</Heading>
          <GameTrailer gameId={game.id}></GameTrailer>
          <ExpandableText game={game}></ExpandableText>
          <GameAttribute game={game}></GameAttribute>
        </GridItem>

        <GridItem>
          <GameImages gameId={game.id}></GameImages>
        </GridItem>
      </SimpleGrid>
      <Divider marginY={8}></Divider>
      <Heading marginBottom={4} textAlign={"center"}>
        More Games
      </Heading>
      <GameGrid></GameGrid>
    </>
  );
};

export default GameDetailsPage;
