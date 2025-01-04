import React from 'react';

interface DivWithMarginTop5Props {
    children: React.ReactNode;
}
export default function DivWithMarginTop5({
    children,
}: DivWithMarginTop5Props) {
    return <div className="mt-5 flex justify-center">{children}</div>;
}
