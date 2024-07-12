"use client";

import { Box, Text, Image } from "@chakra-ui/react";

interface GifCardProps {
  folder: string;
	src: string;
	alt: string;
	title: string;
  width?: string;
  height?: string;
}

export const GifCard = ({ folder, src, alt, title, width, height }: GifCardProps) => {
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
          src={`/thumbnail/${folder}/${src}.png`}
          alt={alt}
          width={width || "10rem"}
          height={height || "13rem"}
					margin={"auto"}
          onMouseOver={(e) => {
						e.currentTarget.src = `/gif/${folder}/${src}.gif`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.src = `/thumbnail/${folder}/${src}.png`;
          }}
        />
      </Box>

      <Text fontSize="lg" textAlign="center" fontWeight={"500"} mt={2} mb={1}>
        {title}
      </Text>
    </Box>
  );
}