import { Story, Meta } from '@storybook/react/types-6-0';

import Menu from '.';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Default: Story = () => <Menu />;

Default.parameters = {
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
};
