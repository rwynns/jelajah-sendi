"use client";

import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export const Volume = () => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <>
      {/* create a vertical volume adjuster with the HiSpeakerWave and HiSpeakerXMark icons */}
			<Box
				bg={"white"}
				position={"absolute"}
				fontSize={"3xl"}
				right={5}
				p={4}
				top={"50%"}
				transform={"translateY(-50%)"}
				borderRadius={"full"}
				boxShadow={"xl"}
				cursor={"pointer"}
				onClick={() => setIsMuted(!isMuted)}
			>
				{isMuted ? <HiSpeakerXMark /> : <HiSpeakerWave />}
			</Box>
    </>
  );
};

export default Volume;
