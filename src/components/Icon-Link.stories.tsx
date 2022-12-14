import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconLink, IconLinkProps } from './Icon-Link';

const meta: Meta = {
    title: 'Icon-Link',
    component: IconLink,
    args: {
        text: 'simple link',
        type: 'slate',
        events: {
            onClick: (event) => console.log(event),
        },
    },
    argTypes: {},
};

export default meta;

const Template: Story<IconLinkProps> = (args) => <IconLink {...args} />;

export const Simple_Link = Template.bind({});

export const Icon = Template.bind({});
Icon.args = { icon: 'mumble', text: 'icon link' };
