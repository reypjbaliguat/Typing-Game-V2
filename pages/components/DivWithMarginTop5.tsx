import React from "react";

interface DivWithMarginTop5Props {
    children: React.ReactNode;
}
export default function DivWithMarginTop5({
    children,
}: DivWithMarginTop5Props) {
    return <div className="flex justify-center mt-5">{children}</div>;
}
