import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading1 } from './Heading1';
import { Heading2 } from './Heading2';
import { Heading4 } from './Heading4';
import { Heading3 } from './Heading3';
import { Paragraph } from './Paragraph';

const meta: Meta = {
    title: 'Foundation/Typography',
    component: Heading1,
};

export default meta;

const Template: Story = () => (
    <div>
        <Heading1>This is a Header1 title</Heading1>
        <Heading2>This is a Header2 title</Heading2>
        <Heading3>This is a Header3 title</Heading3>
        <Heading4>This is a Header4 title</Heading4>
        <Paragraph size={'l'}>
            Paragraph L: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </Paragraph>
        <Paragraph size={'m'}>
            Paragraph M: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </Paragraph>
    </div>
);

export const Typography = Template.bind({});
