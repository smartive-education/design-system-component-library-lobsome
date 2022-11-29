import React, { ReactNode } from 'react';

export interface Props extends React.HTMLProps<HTMLAnchorElement> {
    children: ReactNode;
}

/**
 * Link Button uses <a> as Element
 */
export const LinkButton = ({ children, ...props }: Props) => {
    console.log(props);
    return (
        <a
            {...props}
            className={[
                'text-sm',
                'underline',
                'underline-offset-4',
                'font-semibold',
                'text-violet-600',
                'hover:decoration-violet-200',
                'cursor-pointer',
            ].join(' ')}
        >
            {children}
        </a>
    );
};
