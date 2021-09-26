import { Meta } from '@storybook/react/types-6-0'
import StatusLine from 'components/StatusLine'
import React from 'react'
import { StatusLineProps } from 'types/statusLine'

export default {
  component: StatusLine,
  title: 'Components/StatusLine',
} as Meta

export const Connected: React.FC<StatusLineProps> = () => (
  <StatusLine status={'connected'} name={'device_0'} />
)
export const Disonnected: React.FC<StatusLineProps> = () => (
  <StatusLine status={'disconnected'} name={'device_0'} />
)
