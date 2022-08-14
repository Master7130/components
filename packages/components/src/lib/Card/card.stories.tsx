import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './card';

export default {
  component: Card,
  title: 'Card',
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  description: 'Description',
  imgUrl:
    'https://imageio.forbes.com/specials-images/imageserve/5ed68e8310716f0007411996/0x0.jpg?format=jpg&width=1200',
  imgAlt: 'Alt',
};
