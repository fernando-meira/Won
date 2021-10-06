import { Meta, Story } from '@storybook/react/types-6-0';

import MediaTest from '.';

export default {
  title: 'MediaTest',
  component: MediaTest,
} as Meta;

export const Mobile: Story = () => (
  <MediaTest lessThan="medium">
    <h1>Mobile</h1>
  </MediaTest>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const Desktop: Story = () => (
  <MediaTest greaterThan="medium">
    <h1>Desktop</h1>
  </MediaTest>
);
