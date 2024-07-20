"use client";

import React, { createContext, useContext, useState } from "react";

interface MuteContextType {
  isMute: boolean;
  unmute: () => void;
  mute: () => void;
}

const MuteContext = createContext<MuteContextType | undefined>(undefined);

export const MuteProvider = ({ children }: any) => {
  const [isMute, setMute] = useState(false);

  const mute = () => setMute(true);
  const unmute = () => setMute(false);

  return (
    <MuteContext.Provider value={{ isMute, mute, unmute }}>
      {children}
    </MuteContext.Provider>
  );
};

export const useMute = () => {
  const context = useContext(MuteContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
