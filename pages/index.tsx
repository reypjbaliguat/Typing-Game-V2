"use client";

import Header from "./components/Header";
import PlayButton from "./components/PlayButton";
import TextContainer from "./components/TextContainer";
import TextInput from "./components/TextInput";
import Result from "./components/Result";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import {
  addSecondToTime,
  // fetchWord,
  reset,
  resetTime,
  setContent,
  setGameOver,
  setPlaying,
  setValue,
  setWordPerMinute,
} from "@/store/slices/wordSlice";
import { useCallback, useEffect, useRef } from "react";
import LeaderBoard from "./components/LeaderBoard";

import Navbar from "./components/Navbar";
import { useGetWordsQuery } from "@/store/slices/word";
import { useCreateScoreMutation } from "@/store/slices/score";
import { useSession } from "next-auth/react";
import { enqueueSnackbar } from "notistack";

export default function Home() {
  // wordApi
  const { data, isLoading, refetch, isFetching } = useGetWordsQuery("");

  // Ref
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // session
  const session = useSession() as any;

  // Redux
  const { word } = useSelector((state: RootState) => state.word);
  const auth = useSelector((state: RootState) => state.auth);
  const { wordsPerMinute, content, value, time, playing, gameOver } = word;
  const [createScore] = useCreateScoreMutation();
  const dispatch = useDispatch<AppDispatch>();

  // Component Constants
  const textValue = value && value.split("");
  const letterArr = content && content.join(" ").split("");

  // Component Functions
  const calculateResult = useCallback(() => {
    let result;
    const averageLetterPerWord = 4.7;
    const wordCount = Number(content && content.length / averageLetterPerWord);
    result = Math.round((wordCount / time) * 60);
    dispatch(setWordPerMinute(result));
    dispatch(setGameOver(true));
    dispatch(setPlaying(false));

    // createScore
    if (session.status === "authenticated") {
      const body = {
        email: auth.user.email,
        speed: result,
        user_id: auth.user.id,
      };
      createScore({ body })
        .unwrap()
        .then((data) => console.log({ data }))
        .catch((e) => console.log(e));
    } else {
      enqueueSnackbar("To store your score please login via gmail/facebook", {
        variant: "alert",
        severity: "warning",
      });
    }

    refetch();
  }, [
    auth.user.email,
    auth.user.id,
    content,
    createScore,
    dispatch,
    refetch,
    session.status,
    time,
  ]);
  const handlePlay = () => {
    dispatch(setPlaying(true));
    dispatch(setGameOver(false));
  };

  const fetchNewContent = async () => {
    refetch();
  };

  // useEffects

  useEffect(() => {
    if (
      letterArr &&
      textValue &&
      letterArr.join("") === textValue.join("") &&
      !gameOver
    ) {
      calculateResult();
    }
  }, [textValue, calculateResult, gameOver, letterArr]);

  useEffect(() => {
    if (playing) {
      textAreaRef.current?.focus();
      dispatch(setWordPerMinute(0));
      dispatch(resetTime());
      const id = setInterval(() => dispatch(addSecondToTime()), 1000);
      return () => {
        clearInterval(id);
      };
    }
  }, [playing, dispatch]);

  useEffect(() => {
    dispatch(setValue(""));
  }, [content]);

  useEffect(() => {
    dispatch(setContent(data));
  }, [data]);

  return (
    <main className="flex basis-full justify-center h-screen bg-primarywhite flex-col ">
      <Navbar />
      <div className="flex basis-full h-[90vh] gap-5 px-5">
        <div className="basis-1/5 flex-wrap">
          <LeaderBoard />
        </div>
        <div className="basis-4/5 flex-wrap">
          <Header />
          <Result wordsPerMinute={wordsPerMinute} />
          <TextContainer
            loading={isLoading || isFetching}
            textValue={textValue}
            letterArr={letterArr}
          />
          <TextInput
            componentTextValue={value}
            content={content}
            playing={playing}
            textAreaRef={textAreaRef}
          />
          <PlayButton
            handlePlay={handlePlay}
            fetchNewContent={fetchNewContent}
            playing={playing}
            loading={isLoading || isFetching}
            time={time}
          />
        </div>
      </div>
    </main>
  );
}
