import React, { ReactNode } from 'react';
import './Switch.css';

export interface SwitchProps extends React.HTMLProps<HTMLAnchorElement> {
    children: ReactNode;
}

export const Switch = ({ children, ...props }: SwitchProps) => {
    return (
        <>
            <input className="react-switch-checkbox" id={`react-switch-new`} type="checkbox" />
            <label className="react-switch-label" htmlFor={`react-switch-new`}>
                <span className={'react-switch-button'} />
                <div className={'z-10 p-2'}>Deine Mumbles</div>
                <div className={'z-10 p-2'}>Deine Likes</div>
            </label>
        </>
    );
};
