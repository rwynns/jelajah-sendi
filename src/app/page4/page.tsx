import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { ButtonBack } from "@/components/ButtonBack";
import Speaker from "@/components/Speaker";
import Link from "next/link";

export default function Page4() {
  return (
    <>
      <Box
        bgImage={"/bg4.png"}
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
          EKSREMITAS BAWAH
        </Text>

        <Flex justifyContent={"center"} mt={10} gap={16}>
          <Link href="/puzzle/hip-joint">
            <Box
              cursor={"pointer"}
              _hover={{ transform: "scale(1.1)" }}
              transition={"transform 0.3s"}
              bg={"white"}
              borderRadius={"3xl"}
              boxShadow={"2xl"}
            >
              <Image
                src={"/hip_joint.png"}
                alt={"sendi"}
                width={"18rem"}
                height={"21rem"}
              />

              <Text fontSize="2xl" textAlign="center" fontWeight={"500"} pb={5}>
                Hip Joint
              </Text>
            </Box>
          </Link>

          <Link href="/puzzle/knee-joint">
            <Box
              cursor={"pointer"}
              _hover={{ transform: "scale(1.1)" }}
              transition={"transform 0.3s"}
              bg={"white"}
              borderRadius={"3xl"}
              boxShadow={"2xl"}
            >
              <Image
                src={"/ekstremitas_bawah.png"}
                alt={"sendi"}
                width={"18rem"}
                height={"21rem"}
              />

              <Text fontSize="2xl" textAlign="center" fontWeight={"500"} pb={5}>
                Knee Joint
              </Text>
            </Box>
          </Link>

          <Link href="/puzzle/ankle-joint">
            <Box
              cursor={"pointer"}
              _hover={{ transform: "scale(1.1)" }}
              transition={"transform 0.3s"}
              bg={"white"}
              borderRadius={"3xl"}
              boxShadow={"2xl"}
            >
              <Image
                src={"/ankle_joint.png"}
                alt={"sendi"}
                width={"18rem"}
                height={"21rem"}
              />

              <Text fontSize="2xl" textAlign="center" fontWeight={"500"} pb={5}>
                Ankle Joint
              </Text>
            </Box>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
