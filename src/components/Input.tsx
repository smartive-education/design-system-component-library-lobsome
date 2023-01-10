import React, { HTMLAttributes, ReactNode } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    events?: { [key: string]: (e: Event) => void };
    label?: string;
    name?: string;
    children?: ReactNode;
}

export const Input = ({ label = '', events, name, children, ...rest }: InputProps) => {
    return (
        <div className="font-semibold">
            {label && (
                <label htmlFor={name} className="block mb-0 text-slate-700 text-base">
                    {label}
                </label>
            )}
            <div className="relative flex items-center">
                <input
                    type="text"
                    id={name}
                    className="py-4 pl-4 pr-10 border border-slate-300 rounded-lg leading-4 hover:border-violet-600 h-12 font-medium outline-transparent focus:outline-violet-600"
                    {...rest}
                    {...events}
                />
                {children && <span className="-ml-9 text-slate-600">{children}</span>}
            </div>
        </div>
    );
};
