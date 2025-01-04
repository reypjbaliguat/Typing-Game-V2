import React from 'react';

interface DivWithFlexColProps {
    children: React.ReactNode;
}

export default function DivWithFlexCol({ children }: DivWithFlexColProps) {
    return (
        <div className="mt-5 flex flex-col flex-wrap sm:mt-10">{children}</div>
    );
}
