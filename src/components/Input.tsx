import React, { forwardRef, HTMLAttributes } from 'react';
import { Icon, Icons } from './Icon';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    icon?: Icons;
    label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ children, label = '', ...rest }: InputProps, ref) => {
    return (
        <div className="font-semibold">
            <label htmlFor="first_name" className="block mb-0 text-slate-700 text-base">
                {label}
            </label>
            <div className="relative flex items-center">
                <input
                    type="text"
                    id="first_name"
                    className="py-4 pl-4 pr-10 border border-slate-300 rounded-lg leading-4 hover:border-violet-600 h-12 font-medium focus:border-2 focus:border-violet-600 focus-visible:border-2 focus-visible:border-violet-600 focus:outline-none"
                    placeholder={'Placeholder'}
                    {...rest}
                    ref={ref}
                />
                <Icon type={'mumble'} className="-ml-9 text-slate-600" />
            </div>
        </div>
    );
});
