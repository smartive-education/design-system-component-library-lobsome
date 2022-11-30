import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, Props } from './Icon';

const meta: Meta = {
    title: 'Icon',
    component: Icon,
};

export default meta;

const Template: Story<Props> = (args) => (
    <div className={'text-pink-700'}>
        <Icon {...args} />
    </div>
);

export const Default = Template.bind({});
