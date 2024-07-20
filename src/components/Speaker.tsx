"use client"

import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { Box } from "@chakra-ui/react";
import { useMute } from "@/context/MuteProvider";

export const Speaker = () => {
  const { isMute, mute, unmute } = useMute();

  return (
    <>
			<Box bg={"white"} position={"absolute"} fontSize={'3xl'} right={5} p={4} top={"50%"} transform={"translateY(-50%)"} borderRadius={"full"} boxShadow={"xl"} cursor={"pointer"} onClick={() => (isMute ? unmute() : mute())}>
        {isMute ? <HiSpeakerXMark /> : <HiSpeakerWave />}
      </Box>
    </>
  );
};

export default Speaker;
