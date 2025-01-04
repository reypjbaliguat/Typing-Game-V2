'use client';

import React from 'react';
import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';

interface PlayButtonProps {
    handlePlay: () => void;
    fetchNewContent: () => void;
    playing: Boolean;
    time: string;
    loading: boolean;
    complete: boolean;
}

export default function PlayButton({
    handlePlay,
    fetchNewContent,
    playing,
    time,
    loading,
    complete,
}: PlayButtonProps) {
    return (
        <div className="mt-5 flex justify-center gap-2">
            {!playing && !complete && (
                <>
                    <LoadingButton
                        loading={loading}
                        variant="contained"
                        onClick={fetchNewContent}
                        className="bg-primary dark:bg-darkprimary"
                    >
                        New Content
                    </LoadingButton>
                    <Button
                        className="bg-primary dark:bg-darkprimary"
                        variant="contained"
                        onClick={handlePlay}
                    >
                        Play
                    </Button>
                </>
            )}
            {complete && (
                <LoadingButton
                    loading={loading}
                    variant="contained"
                    onClick={fetchNewContent}
                    className="bg-primary dark:bg-darkprimary"
                >
                    New Content
                </LoadingButton>
            )}
            {playing && <p className="text-5xl"> {time}</p>}
        </div>
    );
}
