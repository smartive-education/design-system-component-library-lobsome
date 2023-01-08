import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Switch, SwitchProps, Tab, Tabs} from './Switch';

const meta: Meta = {
    title: 'Switch',
    component: Switch,
};

export default meta;


const Template: Story<SwitchProps> = (args:{active}) => (
    <Tabs>
        <Tab >Deine Mumbles</Tab>
        <Tab >Deine Likes</Tab>
    </Tabs>

);

export const Default = Template.bind({});
