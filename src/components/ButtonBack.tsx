"use client"

import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const ButtonBack = () => {
	const router = useRouter()

	return (
    <Box
      onClick={() => router.back()}
      position={"absolute"}
      top={5}
      left={5}
			cursor={"pointer"}
    >
      <Image src={"/back.png"} alt={"back"} width={"80"} height={"80"} />
    </Box>
  );
}