import React from "react";
import LeaderBoardData from "./LeaderBoardData";
export default function LeaderBoard() {
  return (
    <>
      <div className="flex basis-full justify-center border rounded-t-md p-8 dark:bg-darkprimary bg-primary text-white">
        <p className="text-2xl text-center text-cyan-400 text-lightblue-500">
          Leader Board
        </p>
      </div>
      <div className="flex basis-full justify-center  p-5 border border-gray-200 rounded-b-md border-t-0 h-5/6">
        <LeaderBoardData />
      </div>
    </>
  );
}
