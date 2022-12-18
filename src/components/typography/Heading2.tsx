import React, {ReactNode} from 'react';


export interface Heading2Props {
    children: ReactNode
}

export const Heading2 = ({ children }: Heading2Props) => {
    return (
        <h2 className={['font-bold', 'text-[40px]', 'text-slate-600', 'leading-125'].join(' ')}>{children}</h2>
    )
}