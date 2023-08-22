import React from "react";

interface FormContainerProps {
    children: React.ReactNode;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormContainer({
    children,
    handleSubmit,
}: FormContainerProps) {
    return <form onSubmit={handleSubmit}>{children}</form>;
}
