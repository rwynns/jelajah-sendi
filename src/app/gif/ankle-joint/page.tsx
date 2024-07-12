"use client";

import { Box, Text, Flex, Container } from "@chakra-ui/react";
import { ButtonBack } from "@/components/ButtonBack";
import Speaker from "@/components/Speaker";
import { GifCard } from "@/components/GifCard";

export default function Ankle() {
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
            GERAK AKTIF ANKLE
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
              folder="ankle"
              src="dorsiflexion"
              title="Dorsiflexion"
              width="13rem"
              height="16rem"
            />
            <GifCard
              alt="planar-flexion"
              folder="ankle"
              src="planar-flexion"
              title="Planar Flexion"
              width="13rem"
              height="16rem"
            />
            <GifCard
              alt="supination"
              folder="ankle"
              src="supination"
              title="Supination (Inversion)"
              width="13rem"
              height="16rem"
            />
            <GifCard
              alt="pronation"
              folder="ankle"
              src="pronation"
              title="Pronation (Eversion)"
              width="13rem"
              height="16rem"
            />
            <GifCard
              alt="abduction-adduction"
              folder="ankle"
              src="abduction-adduction"
              title="Abduction & Adduction"
              width="13rem"
              height="16rem"
            />
          </Flex>
        </Container>
      </Box>
    </>
  );
}
