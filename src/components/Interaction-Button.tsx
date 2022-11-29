import React, {HTMLAttributes, ReactNode} from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: 'like' | 'share' | 'reply';
}

const icons: Record<string, ReactNode> = {
    'share': <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11 6C12.654 6 14 4.654 14 3C14 1.346 12.654 0 11 0C9.346 0 8 1.346 8 3C8 3.224 8.029 3.44 8.075 3.65L4.856 5.661C4.344 5.254 3.704 5 3 5C1.346 5 0 6.346 0 8C0 9.654 1.346 11 3 11C3.704 11 4.344 10.746 4.856 10.339L8.075 12.351C8.029 12.56 8 12.776 8 13C8 14.654 9.346 16 11 16C12.654 16 14 14.654 14 13C14 11.346 12.654 10 11 10C10.296 10 9.657 10.254 9.144 10.661L5.925 8.649C5.971 8.44 6 8.223 6 8C6 7.776 5.971 7.56 5.925 7.351L9.145 5.339C9.657 5.746 10.296 6 11 6ZM11 2C11.551 2 12 2.448 12 3C12 3.552 11.551 4 11 4C10.449 4 10 3.552 10 3C10 2.448 10.449 2 11 2ZM3 9C2.449 9 2 8.552 2 8C2 7.448 2.449 7 3 7C3.551 7 4 7.448 4 8C4 8.552 3.551 9 3 9ZM11 12C11.551 12 12 12.448 12 13C12 13.552 11.551 14 11 14C10.449 14 10 13.552 10 13C10 12.448 10.449 12 11 12Z"
            fill="#475569"/>
    </svg>,
    'like': <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.4 15.5C6.6 14.8 0 9.29999 0 5.09999C0 2.39999 2.2 0.299988 4.8 0.299988C6 0.299988 7.1 0.799988 8 1.49999C8.9 0.699988 10 0.299988 11.2 0.299988C13.9 0.299988 16 2.49999 16 5.09999C16 9.29999 9.4 14.8 8.6 15.4C8.3 15.8 7.7 15.8 7.4 15.5ZM4.8 2.29999C3.3 2.29999 2 3.59999 2 5.09999C2 7.29999 5.5 11.1 8 13.3C10.1 11.4 14 7.49999 14 5.09999C14 3.49999 12.7 2.29999 11.2 2.29999C10.3 2.29999 9.4 2.79999 8.9 3.59999C8.5 4.19999 7.6 4.19999 7.2 3.59999C6.6 2.79999 5.8 2.29999 4.8 2.29999Z"
            fill="#475569"/>
    </svg>,
    'reply': <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8 0C3.6 0 0 3.1 0 7C0 10.9 3.6 14 8 14C8.2 14 8.4 14 8.6 14L14 16V11.6C15.2 10.4 16 8.8 16 7C16 3.1 12.4 0 8 0ZM12 10.8V13.1L8.9 12C8.9 12 8.2 12 8 12C4.7 12 2 9.8 2 7C2 4.2 4.7 2 8 2C11.3 2 14 4.2 14 7C14 9.2 12 10.8 12 10.8Z"
            fill="#475569"/>
    </svg>

}

const typeClasses: Record<string, string[]> = {
    'share': ['hover:bg-slate-100'],
    'like': ['hover:bg-pink-50', 'hover:text-pink-600'],
    'reply': ['hover:bg-violet-50', 'hover:text-violet-600'],
}

/**
 * Primary UI component for user interaction
 */
export const InteractionButton = ({children, type = 'like', ...props}: Props) => {
    return (
        <button {...props}
                className={['flex', 'flex-row', 'items-center', 'gap-2', 'py-2', 'px-3', 'text-slate-600', 'py-2', 'px-4', 'rounded-md', 'hover:rounded-2xl', 'font-semibold', 'text-base', ...typeClasses[type]].join(' ')}>
            {icons[type]}
            {children}
        </button>
    );
};