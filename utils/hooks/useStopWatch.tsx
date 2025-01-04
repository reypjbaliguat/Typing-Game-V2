import { useEffect, useState } from 'react';

const useStopWatch = () => {
    const [time, setTime] = useState(0); // Time in milliseconds
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let interval: any;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10); // Increment by 10ms
            }, 10);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (time: number) => {
        const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
        const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
        const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
        return `${minutes}:${seconds}.${milliseconds}`;
    };
    const start = () => {
        setIsRunning(true);
    };
    const stop = () => {
        setIsRunning(false);
    };
    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };
    return { start, stop, reset, formatTime, time };
};

export default useStopWatch;
