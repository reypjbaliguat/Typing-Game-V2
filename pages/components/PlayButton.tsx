"use client";

import React from "react";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";

interface PlayButtonProps {
  handlePlay: () => void;
  fetchNewContent: () => void;
  playing: Boolean;
  time: number;
  loading: boolean;
}

export default function PlayButton({
  handlePlay,
  fetchNewContent,
  playing,
  time,
  loading,
}: PlayButtonProps) {
  return (
    <div className="flex justify-center gap-2 mt-5">
      {!playing && (
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={fetchNewContent}
          className="bg-primary dark:bg-darkprimary"
        >
          New Content
        </LoadingButton>
      )}
      {!playing && (
        <Button
          className="bg-primary dark:bg-darkprimary"
          variant="contained"
          onClick={handlePlay}
        >
          Play
        </Button>
      )}
      {playing && <p className="text-5xl"> {time}</p>}
    </div>
  );
}
