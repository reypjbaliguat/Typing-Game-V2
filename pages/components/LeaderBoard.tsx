import React from "react";
import Login from "./Login";
export default function LeaderBoard() {
  return (
    <>
      <div className="flex basis-full justify-center border rounded-t-md p-8 dark:bg-darkprimary bg-primary text-white">
        <p className="text-2xl text-center text-cyan-400 text-lightblue-500">
          Leader Board
        </p>
      </div>
      <div className="flex basis-full justify-center items-center border border-gray-200 rounded-b-md border-t-0 h-5/6">
        <Login />
      </div>
    </>
  );
}
