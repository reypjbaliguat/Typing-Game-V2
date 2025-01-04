import React from 'react';
import LeaderBoardData from './LeaderBoardData';
export default function LeaderBoard() {
    return (
        <>
            <div className="flex basis-full justify-center rounded-t-md border bg-primary p-8 text-white dark:bg-darkprimary">
                <p className="text-cyan-400 text-lightblue-500 text-center text-2xl">
                    Leader Board
                </p>
            </div>
            <div className="flex h-5/6 basis-full justify-center rounded-b-md border border-t-0 border-gray-200 p-5">
                <LeaderBoardData />
            </div>
        </>
    );
}
