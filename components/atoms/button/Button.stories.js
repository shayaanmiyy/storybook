import createButton from './button.twig';
import './button.scss';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Atoms/Button',
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
    label: { control: 'text' },
    // onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Large',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small',
    primary: true,
  },
};
