import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { iconList } from './Icon';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        children: {
            defaultValue: 'Button Label',
            control: 'text',
        },
        icon: {
            control: {
                type: 'select',
                options: iconList,
            },
        },
    },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Violet = Template.bind({});
Violet.args = { icon: 'mumble', type: 'violet' };

export const Gradient = Template.bind({});
Gradient.args = { icon: 'mumble', type: 'gradient' };

export const Icon_only = Template.bind({});
Icon_only.args = { icon: 'mumble', type: 'slate', children: null };
