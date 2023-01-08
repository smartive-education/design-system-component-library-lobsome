import React, { HTMLAttributes, useId } from 'react';

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
    events?: { [key: string]: (e: Event) => void };
    label?: string;
}

export const Textarea = ({ label = '', events, ...rest }: TextareaProps) => {
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
                    'border',
                    'border-slate-200',
                    'rounded-lg',
                    'outline-2',
                    'hover:outline-slate-300',
                    'focus:outline-violet-600',
                    'resize-none',
                    'outline-transparent',
                    'font-medium',
                    'placeholder:text-slate-500'
                ].join(' ')}
                {...rest}
                {...events}
            />
        </div>
    );
};
