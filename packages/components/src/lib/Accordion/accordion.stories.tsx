import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './accordion';

export default {
  component: Accordion,
  title: 'accordion',
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      key: 'key',
      item: 'item',
    },
    {
      key: 'key',
      item: 'item',
    },
  ],
};
