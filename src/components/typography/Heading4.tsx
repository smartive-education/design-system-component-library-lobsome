import React, {ReactNode} from 'react';


export interface Heading4Props {
    children: ReactNode
}

export const Heading4 = ({ children }: Heading4Props) => {
    return (
        <h4 className={['font-semibold', 'text-2xl', 'text-slate-600', 'leading-125'].join(' ')}>{children}</h4>
    )
}