'use client';
import React from 'react';

interface ResultProps {
    wordsPerMinute: number;
}

export default function Result({ wordsPerMinute }: ResultProps) {
    return (
        <div className="mt-7">
            <p className="text-center text-4xl">
                Speed:{' '}
                {wordsPerMinute !== 0
                    ? `${wordsPerMinute} Words Per Minute`
                    : 'Play to calculate your speed.'}
            </p>
        </div>
    );
}
