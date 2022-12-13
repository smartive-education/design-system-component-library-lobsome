import React from 'react';
import { Meta, Story } from '@storybook/react';
import {Icon, iconList, IconProps} from './Icon';

const meta: Meta = {
    title: 'Foundation/Icons',
    component: Icon,
};

export default meta;

const Template: Story<IconProps> = (args) => (
    <div className={'flex flex-row flex-wrap gap-12'}>
        {iconList.map((icon) =>
            <div className={['grid', 'place-items-center', 'text-slate-600'].join(' ')}>
                <Icon type={icon} />
                <p>{icon}</p>
            </div>
        )}
    </div>


);

export const Default = Template.bind({});
