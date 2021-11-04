import { Meta, Story } from '@storybook/react/types-6-0';

import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/home',
    backgroundImage: '/img/red-dead-img.png',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />;
