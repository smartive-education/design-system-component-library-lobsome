import React, {ReactNode} from 'react';


export interface Heading3Props {
    children: ReactNode
}

export const Heading3 = ({ children }: Heading3Props) => {
    return (
        <h3 className={['font-semibold', 'text-[32px]', 'text-slate-600', 'leading-125'].join(' ')}>{children}</h3>
    )
}