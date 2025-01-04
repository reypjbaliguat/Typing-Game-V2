'use client';
import React from 'react';
import Letters from './Letters';
import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

interface TextContainerProps {
    loading: boolean;
    textValue: string[] | '';
    letterArr: string[] | '';
}
const TextContainer = ({
    loading,
    textValue,
    letterArr,
}: TextContainerProps) => {
    return (
        <div
            className="my-5 flex rounded-md border border-gray-200 bg-primary p-5 dark:bg-darkprimary sm:my-10 sm:basis-3/5 sm:p-10"
            data-testid="text-container"
        >
            {loading ? (
                <Icon
                    path={mdiLoading}
                    size={4}
                    className="mx-auto animate-spin text-white"
                />
            ) : (
                <Letters textValue={textValue} letterArr={letterArr} />
            )}
        </div>
    );
};

export default TextContainer;
