import React from "react";
import Letter from "./Letter";

interface LettersProps {
    letterArr: string[];
    textValue: string[];
}

export default function Letters({ letterArr, textValue }: LettersProps) {
    return (
        <div>
            {letterArr &&
                letterArr.map((letter, index) => (
                    <Letter
                        letterArr={letterArr}
                        letter={letter}
                        index={index}
                        textValue={textValue}
                        key={index}
                    />
                ))}
        </div>
    );
}
