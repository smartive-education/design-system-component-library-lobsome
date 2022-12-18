import { Icon, Icons } from './Icon';
import { HTMLAttributes } from 'react';
import React from 'react';

export interface IconLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    icon?: Icons;
    text: string;
    type: 'slate' | 'violet';
    events?: { [key: string]: (e: Event) => void };
}

const typeClassNames: Record<string, string[]> = {
    slate: ['text-slate-400', 'hover:text-slate-600'],
    violet: ['text-violet-600', 'hover:text-violet-900'],
};

export const IconLink = ({ text, icon, events, type = 'slate', ...rest }: IconLinkProps) => {
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
                ...typeClassNames[type],
            ].join(' ')}
            {...rest}
            {...events}
        >
            {icon && <Icon type={icon} />}
            {text}
        </a>
    );
};
