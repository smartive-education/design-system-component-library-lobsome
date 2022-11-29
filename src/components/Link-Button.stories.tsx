import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LinkButton } from './Link-Button';
import { Props } from './Link-Button';

const meta: Meta = {
    title: 'Link Button',
    component: LinkButton,
    argTypes: {
        onClick: { action: 'clicked' },
        children: {
            defaultValue: 'Link Button',
            control: 'text',
        },
    },
};

export default meta;

const Template: Story<Props> = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});

export const ExternalLink = Template.bind({});
ExternalLink.args = { href: 'https://lobos.ch', target: '_blank' };
