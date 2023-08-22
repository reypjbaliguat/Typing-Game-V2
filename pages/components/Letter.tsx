import React from "react";

interface LetterProps {
  letterArr: string[];
  textValue: string[];
  index: number;
  letter: string;
}

export default function Letter({
  textValue,
  letterArr,
  index,
  letter,
}: LetterProps) {
  return (
    <span
      className={`text-4xl inline  ${
        textValue && letterArr && textValue[index] === letter
          ? "text-white"
          : textValue && textValue[index] !== letter && textValue.length > index
          ? "text-red-600"
          : ""
      }`}
      data-testid="letter"
    >
      {letter}
    </span>
  );
}
