import { Meta, Story } from '@storybook/react/types-6-0';

import StopWatch from '.';

export default {
  title: 'StopWatch',
  component: StopWatch,
} as Meta;

export const Basic: Story = () => <StopWatch />;
