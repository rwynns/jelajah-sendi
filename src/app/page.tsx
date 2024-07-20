"use client";

import Header from "@/components/Header";
import { Box, Container, Image, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { useMute } from "@/context/MuteProvider";

export default function Home() {
  const { isMute } = useMute();

  const audioRef = useRef(new Audio('/audio/click.wav'))

  const playAudio = () => {
    !isMute && audioRef.current.play();
  }

  return (
    <>
      <Box
        bgImage={"/bg1.png"}
        w={"100%"}
        h={"100vh"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        alignItems={"center"}
        bgSize={"cover"}
        pos={"relative"}
      >
        <Header />

        <Container maxW={"container.xl"} pos={"relative"} zIndex={1}>
          <Image
            src={"/images/tulang_kaki.png"}
            alt="tulang_kaki"
            w={"200"}
            h={"200"}
          />
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text fontSize="4xl" fontWeight={"500"} color={"gray.800"}>
                Selamat Datang
              </Text>
              <Image src={"/images/judul.png"} alt="logo" w={"140"} h={"70"} />
            </Box>
          </Flex>
        </Container>

        <Image
          src={"/images/tulang_bahu.png"}
          alt="tulang_bahu"
          w={"300"}
          h={"350"}
          pos={"absolute"}
          top={"200"}
          right={"100"}
          zIndex={0}
        />

        <Box
          pos={"absolute"}
          top={"80%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Link href={"/page2"} onClick={playAudio}>
            <Image
              src={"/images/start.png"}
              alt="start"
              w={"70"}
              h={"70"}
              mb={10}
              cursor={"pointer"}
              _hover={{ transform: "scale(1.1)" }}
              transition={"transform 0.3s"}
            />
          </Link>
          <Image src={"/images/logo.png"} alt="logo" w={"70"} h={"70"} />

          <Text fontSize={"xl"} mt={2}>
            Aplikasi ini dikembangkan sebagai alternatif dalam pengenalan sendi
          </Text>
        </Box>
      </Box>
    </>
  );
}
