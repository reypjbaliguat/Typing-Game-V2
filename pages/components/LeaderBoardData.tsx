"use client";

import Icon from "@mdi/react";
import { useGetScoresQuery } from "../store/slices/score";
import { mdiLoading } from "@mdi/js";

interface Score {
  email: string;
  speed: number;
}

export default function LeaderBoardData() {
  // scoreApi
  const {
    data: scoresData,
    isLoading: isScoresLoading,
    refetch: scoresRefetch,
    isFetching: isScoresRefetching,
  } = useGetScoresQuery("");
  if (isScoresLoading || isScoresRefetching) {
    return <Icon path={mdiLoading} size={5} />;
  }

  return (
    <main className="flex flex-col">
      <span className="text-2xl font-black mb-5"> Word(s) Per Minute</span>
      {scoresData &&
        scoresData.data.map((item: Score, index: number) => (
          <span key={index} className="text-sm font-bold mb-5">
            {`${index + 1}. `} {item.email} -{" "}
            <span className="bg-primary dark:bg-darkprimary text-white p-2 rounded-lg">
              {" "}
              {item.speed}{" "}
            </span>
          </span>
        ))}
    </main>
  );
}
