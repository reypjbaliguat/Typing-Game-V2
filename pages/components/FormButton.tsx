import React from "react";

interface FormButtonProps {
    text: string;
    loading: boolean;
}

export default function FormButton({ text, loading }: FormButtonProps) {
    return (
        <button
            type="submit"
            className={`bg-green rounded text-white p-4 text-2xl w-40 font-bold ${
                loading && "opacity-50"
            }`}
        >
            {loading ? "Loading" : text}
        </button>
    );
}
