"use client";

import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { ButtonBack } from "@/components/ButtonBack";
import Speaker from "@/components/Speaker";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useMute } from "@/context/MuteProvider";

export default function Puzzle() {
  const [isSolved, setIsSolved] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [success, setSuccess] = useState<HTMLAudioElement | null>(null);

  const { isMute } = useMute();
  const MySwal = withReactContent(Swal);
	const query = usePathname();
	const title = query.split("/")[2];

  useEffect(() => {
    setAudio(new Audio("/audio/click.wav"));
    setSuccess(new Audio("/audio/success.mp3"));
  }, []);

  const playAudio = () => {
    !isMute && audio?.play();
  };

  const playSuccess = () => {
    !isMute && success?.play();
  }

  const handleSolved = () => {
    playSuccess();
    MySwal.fire({
      title: "Selamat!",
      text: "Puzzle berhasil diselesaikan",
      icon: "success",
      confirmButtonText: "Okay",
      timer: 3000,
    });

    setIsSolved(true);
  }

  return (
    <>
      <Box
        bgImage={"/bg4.png"}
        minH={"100vh"}
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
          direction={{ base: "column", md: "row", lg: "row" }}
          pb={{ base: "9rem", md: 0, lg: 0 }}
        >
          <JigsawPuzzle
            imageSrc={`/puzzles/${title}.png`}
            rows={3}
            columns={3}
            onSolved={() => handleSolved()}
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

        {isSolved ? (
          <Link href={`/gif/${title}`} onClick={playAudio}>
            <Box
              pos={"absolute"}
              bottom={"1rem"}
              right={"1rem"}
              p={4}
              zIndex={1}
            >
              <Image
                src={"/images/next.png"}
                alt="home"
                w={"70"}
                h={"70"}
                cursor={"pointer"}
                _hover={{ transform: "scale(1.1)" }}
                transition={"transform 0.3s"}
              />
            </Box>
          </Link>
        ) : (
          <Box pos={"absolute"} bottom={"1rem"} right={"1rem"} p={4} zIndex={1}>
            <Image
              src={"/images/next.png"}
              alt="home"
              w={"70"}
              h={"70"}
              opacity={0.5}
              cursor={"pointer"}
            />
          </Box>
        )}
      </Box>
    </>
  );
}
