import React, { HTMLAttributes } from 'react';

export enum AvatarSize {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl',
}

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
    size?: AvatarSize;
    src: string;
    alt?: string;
    showBorder?: boolean;
}

const avatarClasses: Record<string, string[]> = {
    s: ['w-10', 'h-10'],
    m: ['w-16', 'h-16'],
    l: ['w-24', 'h-24'],
    xl: ['w-40', 'h-40'],
};

export const Avatar = ({ size = AvatarSize.M, src, alt, showBorder = false, ...props }: AvatarProps) => {
    return <img className={['rounded-full bg-violet-200', ...avatarClasses[size], showBorder ? 'border-6 border-slate-100' : ''].join(' ')} src={src} alt={alt} {...props}/>;
};
