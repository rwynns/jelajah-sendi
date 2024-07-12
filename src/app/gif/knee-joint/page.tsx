"use client";

import { Box, Text, Flex, Container } from "@chakra-ui/react";
import { ButtonBack } from "@/components/ButtonBack";
import Speaker from "@/components/Speaker";
import { GifCard } from "@/components/GifCard";

export default function Knee() {
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
            GERAK AKTIF KNEE
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
              folder="knee"
              src="flexion"
              title="Flexion"
              width="14rem"
              height="17rem"
            />
            <GifCard
              alt="extension"
              folder="knee"
              src="extension"
              title="Extension"
              width="14rem"
              height="17rem"
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
}
