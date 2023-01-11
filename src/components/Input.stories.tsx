import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './Input';
import Mumble from './icons/Mumble';

const meta: Meta = {
    title: 'Input',
    component: Input,
    args: {
        label: 'Label',
        events: {
            onChange: (event) => console.log(event),
        },
    },
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        placeholder: {
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

const Template: Story<InputProps> = (args) => (
    <Input {...args}>
        <Mumble />
    </Input>
);
export const Default = Template.bind({});
