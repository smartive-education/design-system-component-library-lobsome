import React, { HTMLAttributes, ReactNode } from 'react';
import { Icon, Icons } from './Icon';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: 'slate' | 'violet' | 'gradient';
    icon: Icons;
    buttonSize: 'm' | 'l';
}

const typeClasses: Record<string, string[]> = {
    slate: ['bg-slate-600', 'hover:bg-slate-700'],
    violet: ['bg-violet-600', 'hover:bg-violet-700'],
    gradient: ['bg-gradient-50', 'hover:bg-gradient-70', 'from-pink-500', 'to-violet-600'],
};

const buttonSizes: Record<string, string[]> = {
    m: ['gap-2', 'p-3'],
    l: ['gap-3', 'py-4', 'px-6'],
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({ children, type = 'slate', icon = 'mumble', buttonSize = 'm', ...props }: ButtonProps) => {
    const sizeOptions = !children && buttonSize === 'l' ? ['gap-3', 'p-3'] : buttonSizes[buttonSize];
    return (
        <button
            {...props}
            className={[
                'flex',
                'flex-row',
                'items-center',
                'justify-center',
                'text-white',
                'font-semibold',
                'leading-4',
                children ? 'rounded-lg' : 'rounded-3xl',
                ...typeClasses[type],
                ...sizeOptions,
            ].join(' ')}
        >
            {children}
            <Icon type={icon} />
        </button>
    );
};
