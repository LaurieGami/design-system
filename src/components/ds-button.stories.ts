import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './ds-button'

export default {
  title: 'Main/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onOpen: { action: 'onClick' },
  },
  render: (args) => html`<ds-button variant=${args.variant} size=${args.size}>${args.children}</ds-button>`,
} as Meta

export const Default: StoryObj = {
  name: 'Default',
  args: {
    children: 'Primary Button',
  },
}

export const Secondary: StoryObj = {
  name: 'Secondary',
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Small: StoryObj = {
  name: 'Small',
  args: {
    size: 'small',
    children: 'Small Button',
  },
}

export const Large: StoryObj = {
  name: 'Large',
  args: {
    size: 'large',
    children: 'Large Button',
  },
}