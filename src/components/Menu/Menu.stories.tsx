import { Story, Meta } from '@storybook/react/types-6-0';

import Menu from '.';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Mobile: Story = () => <Menu />;

Mobile.parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: '#fafafa',
      },
      {
        name: 'dark',
        value: '#282a36',
      },
    ],
  },

  viewport: {
    defaultViewport: 'mobile1',
  },

  layout: 'fullscreen',
};
