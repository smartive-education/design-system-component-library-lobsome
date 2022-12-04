import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './Button';
import { Props } from './Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
        children: {
            defaultValue: 'Button Label',
            control: 'text',
        },
    },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Violet = Template.bind({});
Violet.args = { icon: 'share', type: 'slate' };
