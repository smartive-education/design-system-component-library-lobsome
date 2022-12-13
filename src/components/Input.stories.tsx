import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconProps } from './Icon';
import { Input } from './Input';

const meta: Meta = {
    title: 'Input',
    component: Input,
};

export default meta;

const Template: Story<IconProps> = (args) => (
    <Input label={'Label'}></Input>
);

export const Default = Template.bind({});
