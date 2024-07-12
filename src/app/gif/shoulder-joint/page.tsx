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
          <Text
            fontSize={{
              base: "3xl",
              md: "4xl",
              lg: "6xl",
            }}
            fontWeight={"900"}
            textAlign="center"
            pt={14}
          >
            GERAK AKTIF SHOULDER
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(6, 1fr)",
            }}
            gap={6}
            mt={7}
          >
            <GifCard
              folder="shoulder"
              alt="flexion"
              src="flexion"
              title="Flexion"
            />
            <GifCard
              folder="shoulder"
              alt="extension"
              src="extension"
              title="Extension"
            />
            <GifCard
              folder="shoulder"
              alt="hyperextension"
              src="hyperextension"
              title="Hyperextension"
            />
            <GifCard
              folder="shoulder"
              alt="abduction"
              src="abduction"
              title="Abduction"
            />
            <GifCard
              folder="shoulder"
              alt="adduction"
              src="adduction"
              title="Adduction"
            />
            <GifCard
              folder="shoulder"
              alt="circumduction"
              src="circumduction"
              title="Circumduction"
            />
            <GifCard
              folder="shoulder"
              alt="lateral_rotation"
              src="lateral_rotation"
              title="Lateral Rotation"
            />
            <GifCard
              folder="shoulder"
              alt="medial_rotation"
              src="medial_rotation"
              title="Medial Rotation"
            />
            <GifCard
              folder="shoulder"
              alt="horizontal_abduction"
              src="horizontal_abduction"
              title="Horizontal Abduction"
            />
            <GifCard
              folder="shoulder"
              alt="horizontal_adduction"
              src="horizontal_adduction"
              title="Horizontal Adduction"
            />
            <GifCard
              folder="shoulder"
              alt="scaption"
              src="scaption"
              title="Scaption"
            />
          </Grid>
        </Container>
      </Box>
    </>
  );
}
