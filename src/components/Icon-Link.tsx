import { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

export enum IconLinkColors {
    SLATE = 'slate',

    VIOLET = 'violet',
}

export interface IconLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    color: IconLinkColors;
    label: string;
    events?: { [key: string]: (e: Event) => void };
    children: ReactNode;
}

const typeClassNames: Record<string, string[]> = {
    slate: ['text-slate-400', 'hover:text-slate-600'],
    violet: ['text-violet-600', 'hover:text-violet-900'],
};

export const IconLink = ({ events, color = IconLinkColors.SLATE, children, label, ...rest }: IconLinkProps) => {
    return (
        <a
            className={[
                'transition-all',
                'ease-in-out',
                'duration-350',
                'flex',
                'flex-row',
                'items-center',
                'p-0',
                'gap-1',
                'font-semibold',
                'text-sm',
                'leading-[14px]',
                'cursor-pointer',
                ...typeClassNames[color],
            ].join(' ')}
            {...rest}
            {...events}
        >
            <span>{children}</span>
            {label}
        </a>
    );
};
