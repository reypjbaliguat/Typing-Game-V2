"use client";
import React from "react";

interface ResultProps {
    wordsPerMinute: number;
}

export default function Result({ wordsPerMinute }: ResultProps) {
    return (
        <div className="mt-7">
            <p className="text-4xl text-center">
                Speed: {wordsPerMinute} Words Per Minute
            </p>
        </div>
    );
}
