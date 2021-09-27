import { Meta } from '@storybook/react/types-6-0'
import Loading from 'components/Loading'
import React from 'react'

export default {
  component: Loading,
  title: 'Components/Loading',
} as Meta

export const Default: React.FC = () => <Loading />
