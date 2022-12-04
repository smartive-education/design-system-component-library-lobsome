import React, { HTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';
import './Button.css';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: 'slate' | 'violet' | 'gradient';
    icon: string;
    buttonSize: 'm' | 'l';
}

const typeClasses: Record<string, string[]> = {
    slate: ['bg-slate-600', 'hover:bg-slate-700'],
    violet: ['bg-violet-600', 'hover:bg-violet-700'],
    gradient: ['button-gradient'],
};

const buttonSizes: Record<string, string[]> = {
    m: ['gap-2', 'p-3'],
    l: ['gap-3', 'py-4', 'px-6'],
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, type = 'slate', icon = 'mumble', buttonSize = 'm', ...props }: Props) => {
    return (
        <button
            {...props}
            className={[
                'flex',
                'flex-row',
                'items-center',
                'justify-center',
                'text-white',
                'rounded-lg',
                'font-semibold',
                'leading-4',
                ...typeClasses[type],
                ...buttonSizes[buttonSize],
            ].join(' ')}
        >
            {children}
            <Icon type={'mumble'} />
        </button>
    );
};
