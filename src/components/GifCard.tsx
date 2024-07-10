"use client";

import { Box, Text, Image } from "@chakra-ui/react";

interface GifCardProps {
	src: string;
	alt: string;
	title: string;
}

export const GifCard = ({ src, alt, title }: GifCardProps) => {
	return (
    <Box
      cursor={"pointer"}
      transition={"transform 0.3s"}
      bg={"white"}
      borderRadius={"3xl"}
      boxShadow={"2xl"}
      p={3}
    >
      <Box bgGradient="linear(to-t, #0E5183, #8DDEFC)" borderRadius={"3xl"}>
        <Image
          src={`/thumbnail/shoulder/${src}.png`}
          alt={alt}
          width={"10rem"}
          height={"13rem"}
					margin={"auto"}
          onMouseOver={(e) => {
						e.currentTarget.src = `/gif/shoulder/${src}.gif`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = `/thumbnail/shoulder/${src}.png`;
          }}
        />
      </Box>

      <Text fontSize="lg" textAlign="center" fontWeight={"500"} mt={2} mb={1}>
        {title}
      </Text>
    </Box>
  );
}