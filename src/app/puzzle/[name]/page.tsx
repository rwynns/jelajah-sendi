"use client";

import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";
import { ButtonBack } from "@/components/ButtonBack";
import Speaker from "@/components/Speaker";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { usePathname } from "next/navigation";

export default function Puzzle() {
	const query = usePathname();
	const title = query.split("/")[2];

  return (
    <>
      <Box
        bgImage={"/bg4.png"}
        h={"100vh"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        alignItems={"center"}
        bgSize={"cover"}
        position={"relative"}
      >
        <ButtonBack />
        <Speaker />

        <Text fontSize="6xl" fontWeight={"900"} textAlign="center" pt={20}>
          STRUKTUR ANATOMI
        </Text>
        <Text fontSize="5xl" fontWeight={"500"} textAlign="center" mb={16}>
          {title.split("-").join(" ").toUpperCase()}
        </Text>

        <Flex justifyContent="center" alignItems="center" w={"auto"} gap={20}>
          <JigsawPuzzle
            imageSrc={`/puzzles/${title}.png`}
            rows={3}
            columns={3}
            onSolved={() => alert("Congratulations!")}
          />

          <Image
            src={`/puzzles/${title}.png`}
            width={"19rem"}
            height={"23rem"}
            alt="ex"
            opacity={0.5}
          />
        </Flex>
      </Box>
    </>
  );
}
