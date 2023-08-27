"use client";
import React from "react";
import Letters from "./Letters";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";

interface TextContainerProps {
  loading: boolean;
  textValue: string[];
  letterArr: string[];
}
const TextContainer = ({
  loading,
  textValue,
  letterArr,
}: TextContainerProps) => {
  return (
    <div
      className="flex sm:basis-3/5 sm:my-10 my-5 border border-gray-200 sm:p-10 p-5 rounded-md dark:bg-darkprimary bg-primary"
      data-testid="text-container"
    >
      {loading ? (
        <Icon
          path={mdiLoading}
          size={4}
          className="animate-spin mx-auto text-white"
        />
      ) : (
        <Letters textValue={textValue} letterArr={letterArr} />
      )}
    </div>
  );
};

export default TextContainer;
