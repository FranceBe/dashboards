import { Meta } from '@storybook/react/types-6-0'
import RatioCircle from 'components/RatioCircle'
import React from 'react'
import { palette } from 'styles/variables'
import { RatioCircleProps } from 'types/ratioCircle'

export default {
  component: RatioCircle,
  title: 'Components/RatioCircle',
} as Meta

export const Default: React.FC<RatioCircleProps> = () => <RatioCircle content={'12/45'} />
export const CustomColor: React.FC<RatioCircleProps> = () => (
  <RatioCircle content={'12/45'} color={palette.orange_dark_primary} />
)
export const CustomColorAndJSXContent: React.FC<RatioCircleProps> = () => (
  <RatioCircle
    content={
      <a href={'/?path=/story/components-ratiocircle--custom-color-and-jsx-content'}>
        12/45 (link)
      </a>
    }
    color={palette.purple_primary}
  />
)
