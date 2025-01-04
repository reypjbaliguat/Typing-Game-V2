import React from 'react';

interface InputFieldProps {
    type: string;
    name: string;
    label: string;
    value: string;
    withMarginTop?: boolean;
    required: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
    type,
    name,
    withMarginTop = false,
    label,
    value,
    required,
    handleChange,
}: InputFieldProps) {
    return (
        <>
            <label
                htmlFor={name}
                className={`text-3xl font-bold ${
                    withMarginTop && 'mt-5 sm:mt-10'
                }`}
            >
                {`${label}:`}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                required={required}
                className="rounded border border-black p-2"
                onChange={handleChange}
            />
        </>
    );
}
