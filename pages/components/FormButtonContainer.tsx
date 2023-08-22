import React from "react";

interface FormButtonContainerProps {
    children: React.ReactNode;
}
export default function FormButtonContainer({
    children,
}: FormButtonContainerProps) {
    return <div className="flex justify-center sm:mt-10 mt-5">{children}</div>;
}
