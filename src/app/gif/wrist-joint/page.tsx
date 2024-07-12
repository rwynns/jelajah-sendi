"use client";

import { Box, Text, Flex, Container } from "@chakra-ui/react";
import { ButtonBack } from "@/components/ButtonBack";
import Speaker from "@/components/Speaker";
import { GifCard } from "@/components/GifCard";

export default function Wrist() {
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
            GERAK AKTIF WRIST
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
              folder="wrist"
              src="flexion"
              title="Flexion"
              width="13rem"
              height="16rem"
            />
            <GifCard
              alt="neutral-position"
              folder="wrist"
              src="neutral-position"
              title="Neutral Position"
              width="13rem"
              height="16rem"
            />
            <GifCard
              folder="wrist"
              alt="extension"
              src="extension"
              title="Extension"
              width="13rem"
              height="16rem"
            />
            <GifCard
              folder="wrist"
              alt="ulnar-deviation"
              src="ulnar-deviation"
              title="Ulnar Deviation"
              width="13rem"
              height="16rem"
            />
            <GifCard
              folder="wrist"
              alt="radial-deviation"
              src="radial-deviation"
              title="Radial Deviation"
              width="13rem"
              height="16rem"
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
}
