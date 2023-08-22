"use client";

import Header from "./components/Header";
import PlayButton from "./components/PlayButton";
import TextContainer from "./components/TextContainer";
import TextInput from "./components/TextInput";
import Result from "./components/Result";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/pages/store";
import {
  addSecondToTime,
  fetchWord,
  reset,
  resetTime,
  setGameOver,
  setPlaying,
  setValue,
  setWordPerMinute,
} from "@/pages/store/slices/wordSlice";
import { useEffect, useRef, useState } from "react";
import LeaderBoard from "./components/LeaderBoard";

import Navbar from "./components/Navbar";

export default function Home() {
  // Ref
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  // Component States
  const [componentTextValue, setComponentTextValue] = useState("");
  // Redux
  const { word } = useSelector((state: RootState) => state.word);
  const { wordsPerMinute, status, content, value, time, gameOver, playing } =
    word;
  const dispatch = useDispatch<AppDispatch>();

  // Component Constants
  const textValue = value && value.split("");
  const letterArr = content && content.split("").splice(0, 100);

  // Component Functions
  const calculateResult = () => {
    let result;
    const averageLetterPerWord = 4.7;
    const wordCount = content.length / averageLetterPerWord;
    if (letterArr && textValue && letterArr.join("") === textValue.join("")) {
      result = Math.round((wordCount / time) * 60);
      dispatch(setWordPerMinute(result));
      dispatch(setGameOver(true));
      dispatch(setPlaying(false));
    }
  };
  const refetchOnFinish = () => {
    if (letterArr && textValue && letterArr.join("") === textValue.join("")) {
      dispatch(fetchWord());
    }
  };

  const handlePlay = () => {
    dispatch(setPlaying(true));
  };

  const fetchNewContent = async () => {
    dispatch(fetchWord());
  };

  // useEffects
  useEffect(() => {
    calculateResult();
  }, [value, time, content, textValue, letterArr, dispatch]);

  useEffect(() => {
    refetchOnFinish();
  }, [gameOver, playing]);

  useEffect(() => {
    const promise = dispatch(fetchWord());
    return () => {
      promise.abort();
    };
  }, [dispatch]);
  useEffect(() => {
    dispatch(setValue(componentTextValue));
  }, [componentTextValue, dispatch]);
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
    setComponentTextValue("");
  }, [content]);
  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);
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
            status={status}
            textValue={textValue}
            letterArr={letterArr}
          />
          <TextInput
            componentTextValue={componentTextValue}
            setComponentTextValue={setComponentTextValue}
            content={content}
            playing={playing}
            textAreaRef={textAreaRef}
          />
          <PlayButton
            handlePlay={handlePlay}
            fetchNewContent={fetchNewContent}
            playing={playing}
            time={time}
          />
        </div>
      </div>
    </main>
  );
}
