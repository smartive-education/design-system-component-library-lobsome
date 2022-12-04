import React, { HTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';
import './Button.css';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: 'slate' | 'violet' | 'gradient';
    icon: string;
}

const typeClasses: Record<string, string[]> = {
    slate: ['bg-slate-600', 'hover:bg-slate-700'],
    violet: ['bg-violet-600', 'hover:bg-violet-700'],
    gradient: ['button-gradient'],
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, type = 'slate', icon = 'mumble', ...props }: Props) => {
    return (
        <button
            {...props}
            className={[
                'flex',
                'flex-row',
                'items-center',
                'justify-center',
                'gap-2',
                'p-3',
                'text-white',
                'rounded-lg',
                'font-semibold',
                'leading-4',
                ...typeClasses[type],
            ].join(' ')}
        >
            {children}
            <Icon type={'mumble'} />
        </button>
    );
};
