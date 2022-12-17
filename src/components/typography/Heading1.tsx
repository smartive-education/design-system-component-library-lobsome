import React, {ReactNode} from 'react';


export interface Heading1Props {
    children: ReactNode
}

export const Heading1 = ({ children }: Heading1Props) => {
    return (
        <h1 className={['font-bold', 'text-5xl', 'text-slate-600', 'leading-125'].join(' ')}>{children}</h1>
    )
}