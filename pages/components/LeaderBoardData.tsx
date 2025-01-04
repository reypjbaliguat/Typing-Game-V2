'use client';

import Icon from '@mdi/react';
import { useGetScoresQuery } from '@/store/slices/score';
import { mdiLoading } from '@mdi/js';

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
    } = useGetScoresQuery('');
    if (isScoresLoading || isScoresRefetching) {
        return <Icon path={mdiLoading} size={5} className="animate-spin" />;
    }

    return (
        <main className="flex flex-col">
            <span className="mb-5 text-2xl font-black">
                {' '}
                Word(s) Per Minute
            </span>
            {scoresData &&
                scoresData.data.map((item: Score, index: number) => (
                    <span key={index} className="mb-5 text-sm font-bold">
                        {`${index + 1}. `} {item.email} -{' '}
                        <span className="rounded-lg bg-primary p-1 text-white dark:bg-darkprimary">
                            {' '}
                            {item.speed}{' '}
                        </span>
                    </span>
                ))}
        </main>
    );
}
