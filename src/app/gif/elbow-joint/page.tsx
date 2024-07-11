"use client"

import { Box, Text, Grid, Container } from "@chakra-ui/react";
import { ButtonBack } from "@/components/ButtonBack";
import Speaker from "@/components/Speaker";
import { GifCard } from "@/components/GifCard";

export default function Shoulder() {
  return (
    <>
      <Box
        bgImage={"/bg6.png"}
        h={"100vh"}
        bgPosition={"center"}
        alignItems={"center"}
        bgSize={"cover"}
        position={"relative"}
      >
        <ButtonBack />
        <Speaker />

        <Container maxW="8xl">
          <Text fontSize={{ 
							base: "3xl", 
							md: "4xl", 
							lg: "6xl" 
						}}
						fontWeight={"900"}
						textAlign="center"
						pt={5}
					>
            GERAK AKTIF ELBOW
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(6, 1fr)",
            }}
            gap={6}
            mt={5}
          >
            <GifCard alt="flexion" src="flexion" title="Flexion" />
            <GifCard alt="extension" src="extension" title="Extension" />
            <GifCard
              alt="hyperextension"
              src="hyperextension"
              title="Hyperextension"
            />
            <GifCard alt="abduction" src="abduction" title="Abduction" />
          </Grid>
        </Container>
      </Box>
    </>
  );
}
