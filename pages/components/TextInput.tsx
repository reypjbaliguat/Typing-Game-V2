"use client";

import { Dispatch, RefObject, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { setValue } from "@/store/slices/wordSlice";

interface TextInputProps {
  componentTextValue: string;
  content: string[];
  playing: Boolean;
  textAreaRef: any;
}

export default function TextInput({
  componentTextValue,
  playing,
  textAreaRef,
}: TextInputProps) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <textarea
      ref={textAreaRef}
      placeholder="Type here ..."
      className="w-full p-5 rounded-md border-primary border text-black bg-white "
      value={componentTextValue}
      disabled={!playing}
      onChange={(e) => {
        dispatch(setValue(e.target.value));
      }}
    />
  );
}
