import { Meta } from '@storybook/react/types-6-0'
import StatusStat from 'containers/StatusStat'
import React from 'react'

export default {
  component: StatusStat,
  title: 'Containers/StatusStat',
} as Meta

export const Default: React.FC<{ connectedLength: number; disconnectedLength: number }> = () => (
  <StatusStat connectedLength={23} disconnectedLength={12} />
)
