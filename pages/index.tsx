'use client';

import Header from './components/Header';
import PlayButton from './components/PlayButton';
import TextContainer from './components/TextContainer';
import TextInput from './components/TextInput';
import Result from './components/Result';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';

import { useCallback, useEffect, useRef, useState } from 'react';
import LeaderBoard from './components/LeaderBoard';

import Navbar from './components/Navbar';
import { useGetWordsQuery } from '@/store/slices/word';
import { useCreateScoreMutation } from '@/store/slices/score';
import { enqueueSnackbar } from 'notistack';
import useStopWatch from '@/utils/hooks/useStopWatch';
import { Button } from '@mui/material';
import { useSession } from 'next-auth/react';

export default function Home() {
    const [playing, setPlaying] = useState(false);
    const [value, setvalue] = useState<string>('');
    const [wordPerMinute, setWordPerMinute] = useState(0);
    const session = useSession();
    const [createScore] = useCreateScoreMutation();
    const wordsCount = 10;

    // stop watch
    const { time, start, reset, stop, formatTime } = useStopWatch();
    // wordApi
    const { data, isLoading, refetch, isFetching } = useGetWordsQuery('');

    // Ref
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    // Component Constants
    const textValue = value && (value.split('') as string[]);
    const letterArr = data && data.join(' ').split('');
    const isTheSameLength = letterArr && textValue.length == letterArr.length;
    const complete = letterArr && value === letterArr.join('');

    // Component Functions

    const handlePlay = () => {
        if (textValue) {
            fetchNewContent();
        }
        reset();
        start();
        setPlaying(true);
    };

    const handleChangeValue = (val: string) => {
        setvalue(val);
    };

    const fetchNewContent = async () => {
        refetch();
        setvalue('');
    };
    const calculateScore = () => {
        stop();
        setPlaying(false);
        setWordPerMinute(Math.ceil(wordsCount / (time / 1000 / 60)));
        // createScore
        if (session.status === 'authenticated') {
            const body = {
                email: session.data.user.email,
                speed: Math.ceil(wordsCount / (time / 1000 / 60)),
                user_id: JSON.parse(localStorage.getItem('user')!).id,
            };
            createScore({ body })
                .unwrap()
                .then(() =>
                    enqueueSnackbar('Score saved.', {
                        variant: 'alert',
                        severity: 'success',
                    }),
                )
                .catch(() =>
                    enqueueSnackbar('Something went wrong please try again.', {
                        variant: 'alert',
                        severity: 'error',
                    }),
                );
        } else {
            enqueueSnackbar('To store your score please login.', {
                variant: 'alert',
                severity: 'info',
            });
        }
    };

    useEffect(() => {
        if (isTheSameLength) {
            if (complete) {
                calculateScore();
            }
        }
    }, [isTheSameLength]);

    useEffect(() => {
        if (playing) {
            textAreaRef.current?.focus();
        }
    }, [playing]);

    return (
        <main className="bg-primarywhite flex h-screen basis-full flex-col justify-center">
            <Navbar />
            <div className="flex h-[90vh] basis-full gap-5 px-5">
                <div className="basis-1/5 flex-wrap">
                    <LeaderBoard />
                </div>
                <div className="basis-4/5 flex-wrap">
                    <Header />
                    <Result wordsPerMinute={wordPerMinute} />
                    <TextContainer
                        loading={isLoading || isFetching}
                        textValue={textValue}
                        letterArr={letterArr}
                    />
                    <TextInput
                        componentTextValue={value}
                        playing={playing}
                        textAreaRef={textAreaRef}
                        handleChangeValue={handleChangeValue}
                    />
                    <PlayButton
                        handlePlay={handlePlay}
                        fetchNewContent={fetchNewContent}
                        playing={playing}
                        complete={complete}
                        loading={isLoading || isFetching}
                        time={formatTime(time)}
                    />
                </div>
            </div>
        </main>
    );
}
