import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading, HeadingTags } from './Heading';
import { Paragraph } from './Paragraph';

const meta: Meta = {
    title: 'Foundation/Typography',
    component: Heading,
};

export default meta;

const Template: Story = () => (
    <div>
        <Heading>This is a Header1 title</Heading>
        <Heading tag={HeadingTags.HEADING2}>This is a Header2 title</Heading>
        <Heading tag={HeadingTags.HEADING3}>This is a Header3 title</Heading>
        <Heading tag={HeadingTags.HEADING4}>This is a Header4 title</Heading>
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
