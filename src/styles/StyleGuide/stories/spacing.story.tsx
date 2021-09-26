import { Meta } from '@storybook/react/types-6-0'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import * as styledGuide from 'styles/variables'
import { spaces } from 'styles/variables'

export default { title: 'StyleGuide/Spacing' } as Meta

const StorybookTitle = styled.h1`
  color: grey;
`

const StorybookSpaces = styled.div`
  display: flex;
  align-items: center;
`
const SpacingSmall = styled.div`
  margin-left: 33px;
  width: ${styledGuide.spaces.small};
  height: ${styledGuide.spaces.small};
  background-color: grey;
`
const SpacingRegular = styled.div`
  margin-left: 23px;
  width: ${styledGuide.spaces.regular};
  height: ${styledGuide.spaces.regular};
  background-color: grey;
`
const SpacingMedium = styled.div`
  margin-left: 7px;
  width: ${styledGuide.spaces.medium};
  height: ${styledGuide.spaces.medium};
  background-color: grey;
`
const SpacingLarge = styled.div`
  margin-left: 26px;
  width: ${styledGuide.spaces.large};
  height: ${styledGuide.spaces.large};
  background-color: grey;
`

export const Spaces = (): ReactElement => (
  <>
    <StorybookTitle>Spacing</StorybookTitle>
    <StorybookSpaces>
      Spacing small {spaces.small} : <SpacingSmall />
    </StorybookSpaces>
    <StorybookSpaces>
      Spacing regular {spaces.regular} : <SpacingRegular />
    </StorybookSpaces>
    <StorybookSpaces>
      Spacing medium {spaces.medium} : <SpacingMedium />
    </StorybookSpaces>
    <StorybookSpaces>
      Spacing large {spaces.large} : <SpacingLarge />
    </StorybookSpaces>
  </>
)
