import React from 'react';

interface FormButtonProps {
    text: string;
    loading: boolean;
}

export default function FormButton({ text, loading }: FormButtonProps) {
    return (
        <button
            type="submit"
            className={`bg-green w-40 rounded p-4 text-2xl font-bold text-white ${
                loading && 'opacity-50'
            }`}
        >
            {loading ? 'Loading' : text}
        </button>
    );
}
