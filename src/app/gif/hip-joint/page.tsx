"use client";

import { Box, Text, Flex, Container } from "@chakra-ui/react";
import { ButtonBack } from "@/components/ButtonBack";
import Speaker from "@/components/Speaker";
import { GifCard } from "@/components/GifCard";

export default function Hip() {
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

        <Container maxW="8xl" pt={10}>
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
            GERAK AKTIF HIP
          </Text>

          <Flex
            justifyContent="center"
            alignItems="center"
            w={"auto"}
            gap={10}
            mt={5}
          >
            <GifCard
              alt="flexion"
              folder="hip"
              src="flexion"
              title="Flexion"
              width="11rem"
              height="14rem"
            />
            <GifCard
              folder="hip"
              alt="extension"
              src="extension"
              title="Extension"
              width="11rem"
              height="14rem"
            />
            <GifCard
              folder="hip"
              alt="hyperextension"
              src="hyperextension"
              title="Hyperextension"
              width="11rem"
              height="14rem"
            />
          </Flex>

          <Flex
            justifyContent="center"
            alignItems="center"
            w={"auto"}
            gap={10}
            mt={5}
          >
            <GifCard
              alt="adduction"
              folder="hip"
              src="adduction"
              title="Adduction"
              width="11rem"
              height="14rem"
            />
            <GifCard
              folder="hip"
              alt="lateral-rotation"
              src="lateral-rotation"
              title="Lateral Rotation"
              width="11rem"
              height="14rem"
            />
            <GifCard
              folder="hip"
              alt="medial-rotation"
              src="medial-rotation"
              title="Medial Rotation"
              width="11rem"
              height="14rem"
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
}
