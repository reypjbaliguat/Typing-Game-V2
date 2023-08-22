"use client";

import React from "react";
import Button from "@mui/material/Button";

interface PlayButtonProps {
  handlePlay: () => void;
  fetchNewContent: () => void;
  playing: Boolean;
  time: number;
}

export default function PlayButton({
  handlePlay,
  fetchNewContent,
  playing,
  time,
}: PlayButtonProps) {
  return (
    <div className="flex justify-center gap-2 mt-5">
      {!playing && (
        <Button variant="contained" onClick={fetchNewContent}>
          New Content
        </Button>
      )}
      {!playing && (
        <Button variant="contained" onClick={handlePlay}>
          Play
        </Button>
      )}
      {playing && <p className="text-5xl"> {time}</p>}
    </div>
  );
}
