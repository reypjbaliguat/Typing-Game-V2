import React from "react";

interface DivWithFlexColProps {
    children: React.ReactNode;
}

export default function DivWithFlexCol({ children }: DivWithFlexColProps) {
    return (
        <div className="flex flex-wrap flex-col sm:mt-10 mt-5">{children}</div>
    );
}
