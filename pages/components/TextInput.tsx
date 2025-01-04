'use client';

interface TextInputProps {
    componentTextValue: string;
    playing: Boolean;
    textAreaRef: any;
    handleChangeValue: (val: string) => void;
}

export default function TextInput({
    componentTextValue,
    playing,
    textAreaRef,
    handleChangeValue,
}: TextInputProps) {
    return (
        <textarea
            ref={textAreaRef}
            placeholder="Type here ..."
            className="w-full rounded-md border border-primary bg-white p-5 text-black"
            value={componentTextValue}
            disabled={!playing}
            onChange={(e) => {
                handleChangeValue(e.target.value);
            }}
        />
    );
}
