import React, { ReactNode } from 'react';

export enum HeadingTags {
    HEADING1 = 'h1',
    HEADING2 = 'h2',
    HEADING3 = 'h3',
    HEADING4 = 'h4',
}

export interface HeadingProps {
    tag?: HeadingTags;
    children: ReactNode;
}

const headingClasses: Record<string, string[]> = {
    h1: ['text-5xl', 'leading-125'],
    h2: ['text-[40px]', 'leading-125'],
    h3: ['text-[32px]', 'leading-125'],
    h4: ['text-2xl', 'leading-125'],
}

export const Heading = ({ children, tag = HeadingTags.HEADING1 }: HeadingProps) => {
    // This is a workaround as of tag can not be used directly
    const CustomTag = tag;
    return <CustomTag className={['font-bold', 'text-slate-600', ...headingClasses[tag]].join(' ')}>{children}</CustomTag>;
};
