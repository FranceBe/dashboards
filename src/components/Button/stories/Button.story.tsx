import { Meta } from '@storybook/react/types-6-0'
import Button from 'components/Button'
import React from 'react'

export default {
  component: Button,
  title: 'Components/Button',
} as Meta

export const Default = () => <Button>button text</Button>
export const Disabled = () => <Button disabled>button text</Button>
