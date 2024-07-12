"use client"

import { Box, Text, Flex, Container } from "@chakra-ui/react";
import { ButtonBack } from "@/components/ButtonBack";
import Speaker from "@/components/Speaker";
import { GifCard } from "@/components/GifCard";

export default function Elbow() {
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

        <Container maxW="8xl" pt={20}>
          <Text
            fontSize={{
              base: "3xl",
              md: "4xl",
              lg: "6xl",
            }}
            fontWeight={"900"}
            textAlign="center"
            pt={5}
          >
            GERAK AKTIF ELBOW
          </Text>

          <Flex
            justifyContent="center"
            alignItems="center"
            w={"auto"}
            gap={10}
            mt={10}
          >
            <GifCard
              alt="flexion"
              folder="elbows"
              src="flexion"
              title="Flexion"
              width="13rem"
              height="16rem"
            />
            <GifCard
              alt="extension"
              folder="elbows"
              src="extension"
              title="Extension"
              width="13rem"
              height="16rem"
            />
            <GifCard
              folder="elbows"
              alt="pronation"
              src="pronation"
              title="Pronation"
              width="13rem"
              height="16rem"
            />
            <GifCard
              folder="elbows"
              alt="supination"
              src="supination"
              title="Supination"
              width="13rem"
              height="16rem"
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
}
