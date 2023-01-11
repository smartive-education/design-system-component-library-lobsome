import React, { ReactNode } from 'react';

export interface ParagraphProps {
    children: ReactNode;
    size: 'm' | 'l';
}

const paragraphSizes: Record<string, string[]> = {
    m: ['text-lg', 'leading-140'],
    l: ['text-2xl', 'leading-145'],
};

export const Paragraph = ({ children, size }: ParagraphProps) => {
    return <p className={['font-medium', 'text-slate-600', ...paragraphSizes[size]].join(' ')}>{children}</p>;
};
