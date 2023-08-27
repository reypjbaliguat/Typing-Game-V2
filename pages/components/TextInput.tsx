"use client";

import { Dispatch, RefObject, SetStateAction } from "react";

interface TextInputProps {
  componentTextValue: string;
  setComponentTextValue: Dispatch<SetStateAction<string>>;
  content: String;
  playing: Boolean;
  textAreaRef: any;
}

export default function TextInput({
  componentTextValue,
  setComponentTextValue,
  playing,
  textAreaRef,
}: TextInputProps) {
  return (
    <textarea
      ref={textAreaRef}
      placeholder="Type here ..."
      className="w-full p-5 rounded-md border-primary border text-black bg-white "
      value={componentTextValue}
      disabled={!playing}
      onChange={(e) => {
        setComponentTextValue(e.target.value);
      }}
    />
  );
}
