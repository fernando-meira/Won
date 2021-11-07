import { Meta, Story } from '@storybook/react/types-6-0';

import Ribbon, { RibbonProps } from '.';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Bestselling',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Basic: Story<RibbonProps> = (args) => (
  <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative' }}>
    <Ribbon {...args} />
  </div>
);
