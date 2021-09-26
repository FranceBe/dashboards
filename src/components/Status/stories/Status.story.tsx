import { Meta } from '@storybook/react/types-6-0'
import Status from 'components/Status'
import React from 'react'
import { StatusProps } from 'types/status'

export default {
  component: Status,
  title: 'Components/Status',
} as Meta

export const Connected: React.FC<StatusProps> = () => <Status status={'connected'} />
export const Disonnected: React.FC<StatusProps> = () => <Status status={'disconnected'} />
