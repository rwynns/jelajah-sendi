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
        <Text fontSize="4xl" fontWeight={"500"} textAlign="center" mb={10}>
          {title.split("-").join(" ").toUpperCase()}
        </Text>

        <Flex
          justifyContent="center"
          alignItems="center"
          w={"auto"}
          gap={20}
          direction={{ sm: "column", md: "row", lg: "row" }}
        >
          <JigsawPuzzle
            imageSrc={`/puzzles/${title}.png`}
            rows={3}
            columns={3}
            onSolved={() => alert("Congratulations!")}
          />

          <Box
            cursor={"pointer"}
            transition={"transform 0.3s"}
            bg={"white"}
            borderRadius={"3xl"}
            boxShadow={"2xl"}
          >
            <Image
              src={`/puzzles/${title}.png`}
              alt={"sendi"}
              width={"18rem"}
              height={"23rem"}
              opacity={0.5}
            />
          </Box>
        </Flex>

        {/* Bottom right corner button */}
        <Box pos={"absolute"} bottom={"1rem"} right={"1rem"} p={4} zIndex={1}>
          <Image
            src={"/images/next.png"}
            alt="home"
            w={"70"}
            h={"70"}
            cursor={"pointer"}
            onClick={() => (window.location.href = "/")}
            _hover={{ transform: "scale(1.1)" }}
            transition={"transform 0.3s"}
          />
        </Box>
      </Box>
    </>
  );
}
