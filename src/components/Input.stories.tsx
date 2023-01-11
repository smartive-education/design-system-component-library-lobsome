import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './Input';

const meta: Meta = {
    title: 'Input',
    component: Input,
    args: {
        name: 'test-input',
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

const Template: Story<InputProps> = (args) => <Input {...args}></Input>;
export const Default = Template.bind({});
