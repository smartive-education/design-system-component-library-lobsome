import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switch, SwitchProps } from './Switch';

const meta: Meta = {
    title: 'Switch',
    component: Switch,
};

export default meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
