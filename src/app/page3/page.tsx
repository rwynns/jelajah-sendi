import { Box, Container, Flex, Text, Image } from "@chakra-ui/react";
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

        <Text fontSize="6xl" fontWeight={"900"} textAlign="center" pt={20}>
          EKSREMITAS ATAS
        </Text>

        <Flex justifyContent={"center"} mt={10} gap={16}>
          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.1)" }}
            transition={"transform 0.3s"}
            bg={"white"}
            borderRadius={"3xl"}
            boxShadow={"2xl"}
          >
            <Image
              src={"/ekstremitas_atas.png"}
              alt={"sendi"}
              width={"18rem"}
              height={"21rem"}
            />

            <Text fontSize="2xl" textAlign="center" fontWeight={"500"} pb={5}>
              Eksremitas Atas
            </Text>
          </Box>

          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.1)" }}
            transition={"transform 0.3s"}
            bg={"white"}
            borderRadius={"3xl"}
            boxShadow={"2xl"}
          >
            <Image
              src={"/ekstremitas_atas.png"}
              alt={"sendi"}
              width={"18rem"}
              height={"21rem"}
            />

            <Text fontSize="2xl" textAlign="center" fontWeight={"500"} pb={5}>
              Eksremitas Atas
            </Text>
          </Box>

          <Box
            cursor={"pointer"}
            _hover={{ transform: "scale(1.1)" }}
            transition={"transform 0.3s"}
            bg={"white"}
            borderRadius={"3xl"}
            boxShadow={"2xl"}
          >
            <Image
              src={"/ekstremitas_atas.png"}
              alt={"sendi"}
              width={"18rem"}
              height={"21rem"}
            />

            <Text fontSize="2xl" textAlign="center" fontWeight={"500"} pb={5}>
              Eksremitas Atas
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
