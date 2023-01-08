import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconLink, IconLinkColors, IconLinkProps } from './Icon-Link';
import Mumble from '../assets/icons/Mumble.svg';

const meta: Meta = {
    title: 'Icon-Link',
    component: IconLink,
    args: {
        color: IconLinkColors.SLATE,
        events: {
            onClick: (event) => console.log(event),
        },
    },
    argTypes: {
        children: { control: { type: 'text' } },
        color: {
            control: {
                type: 'select',
                options: [...Object.values(IconLinkColors)],
            },
        },
    },
};

export default meta;

const Template: Story<IconLinkProps> = (args) => (
    <IconLink {...args}>
        <Mumble /> Das ist ein Link
    </IconLink>
);

export const Icon_Link = Template.bind({});
