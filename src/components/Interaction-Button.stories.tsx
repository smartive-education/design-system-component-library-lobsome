import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InteractionButton, Props } from './Interaction-Button';

const meta: Meta = {
    title: 'Interaction Button',
    component: InteractionButton,
    argTypes: {
        onClick: { action: 'clicked' },
        children: {
            defaultValue: 'Default Text',
        },
    },
};

export default meta;

const Template: Story<Props> = (args) => <InteractionButton {...args} />;

export const Default = Template.bind({});
