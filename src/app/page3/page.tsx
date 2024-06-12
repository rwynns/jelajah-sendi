import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ButtonBack } from "@/components/ButtonBack";
import Speaker from "@/components/Speaker";

export default function Page3() {
  return (
    <>
      <Box
        bgImage={"/bg3.png"}
        h={"100vh"}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        alignItems={"center"}
        bgSize={"cover"}
        position={"relative"}
      >
        <ButtonBack />
        <Speaker />

        <Text fontSize="6xl" fontWeight={"bold"} textAlign="center" pt={20}>
          EKSREMITAS ATAS
        </Text>

        <Flex justifyContent={"center"} mt={10} gap={8}>
          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.1)" }}
            transition={"transform 0.3s"}
          >
            <Image
              src={"/ekstremitas_atas.png"}
              alt={"sendi"}
              width={"300"}
              height={"300"}
            />

            <Text fontSize="xl" textAlign="center">
              Eksremitas Atas
            </Text>
          </Box>

          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.1)" }}
            transition={"transform 0.3s"}
          >
            <Image
              src={"/ekstremitas_bawah.png"}
              alt={"sendi"}
              width={"300"}
              height={"300"}
            />

            <Text fontSize="xl" textAlign="center">
              Eksremitas Bawah
            </Text>
          </Box>

          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.1)" }}
            transition={"transform 0.3s"}
          >
            <Image
              src={"/ekstremitas_bawah.png"}
              alt={"sendi"}
              width={"300"}
              height={"300"}
            />

            <Text fontSize="xl" textAlign="center">
              Eksremitas Bawah
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
