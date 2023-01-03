import React, { HTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';

export interface InteractionButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: 'like' | 'share' | 'reply';
}

// const typeClasses: Record<InteractionButtonProps['type'], Record<'active' | 'inactive', string[]>> = {
//     share: {
//         active: ['hover:bg-slate-100'],
//         inactive: [],
//     },
//     like: {
//         active: ['hover:bg-pink-50', 'hover:text-pink-§600'],
//         inactive: [],
//     },
//     reply: {
//         active: ['hover:bg-violet-50', 'hover:text-violet-600'],
//         inactive: []
//     },
// };

/**
 * Primary UI component for user interaction
 */
export const InteractionButton = ({ children, type = 'like', ...props }: InteractionButtonProps) => {
    return (
        <button
            {...props}
            className={[
                'flex',
                'flex-row',
                'items-center',
                'gap-2',
                'py-2',
                'px-3',
                'text-slate-600',
                'py-2',
                'px-4',
                'rounded-md',
                'hover:rounded-2xl',
                'font-semibold',
                'text-base',
                //...typeClasses[type],
            ].join(' ')}
        >
            <Icon type={type} />
            {children}
        </button>
    );
};
