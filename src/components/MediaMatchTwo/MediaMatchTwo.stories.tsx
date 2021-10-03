import { Meta, Story } from '@storybook/react/types-6-0';

import MediaMatchTwo from '.';

export default {
  title: 'MediaMatchTwo',
  component: MediaMatchTwo,
} as Meta;

export const Mobile: Story = () => (
  <MediaMatchTwo lessThan="medium">Mobile</MediaMatchTwo>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const Desktop: Story = () => (
  <MediaMatchTwo greaterThan="medium">Desktop</MediaMatchTwo>
);
