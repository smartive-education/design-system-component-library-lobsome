import React, { HTMLAttributes, useId } from 'react';

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
    events?: { [key: string]: (e: Event) => void };
    label?: string;
    placeholder?: string
}

export const Textarea = ({ placeholder = '', label = '', events, ...rest }: TextareaProps) => {
    const id = useId();
    return (
        <div>
            {label && (
                <label htmlFor={id} className="block mb-0 text-slate-700 text-base">
                    {label}
                </label>
            )}
            <textarea
                id={id}
                className={[
                    'w-full',
                    'bg-slate-100',
                    'p-4',
                    'font-medium',
                    'border',
                    'border-slate-200',
                    'rounded-lg',
                    'resize-none',
                    'placeholder:text-slate-500',
                    'hover:border-slate-300',
                    'outline-transparent',
                    'focus:outline-violet-600'
                ].join(' ')}
                {...rest}
                {...events}
                placeholder={placeholder}
            />
        </div>
    );
};
