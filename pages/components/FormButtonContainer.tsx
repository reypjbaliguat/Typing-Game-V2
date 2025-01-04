import React from 'react';

interface FormButtonContainerProps {
    children: React.ReactNode;
}
export default function FormButtonContainer({
    children,
}: FormButtonContainerProps) {
    return <div className="mt-5 flex justify-center sm:mt-10">{children}</div>;
}
