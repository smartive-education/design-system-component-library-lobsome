import React, { HTMLAttributes } from 'react';
import { Icon } from './Icon';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    events: { [key: string]: (e: Event) => void };
    label?: string;
    name: string;
    placeholder?: string;
    value: string;
}

export const Input = ({ label = '', events, placeholder, name, value, ...rest }: InputProps) => {
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
                    className="py-4 pl-4 pr-10 border border-slate-300 rounded-lg leading-4 hover:border-violet-600 h-12 font-medium focus:border-2 focus:border-violet-600 focus-visible:border-2 focus-visible:border-violet-600 focus:outline-none"
                    placeholder={placeholder}
                    value={value}
                    {...rest}
                    {...events}
                />
                <Icon type={'mumble'} className="-ml-9 text-slate-600" />
            </div>
        </div>
    );
};
