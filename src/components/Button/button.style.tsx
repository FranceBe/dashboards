import styled from 'styled-components'
import { elements, palette, spaces } from 'styles/variables'

export const ButtonDefault = styled.button`
  background-color: ${palette.blue_primary};
  color: ${palette.white};
  padding: ${spaces.regular};
  border-radius: ${spaces.small};
  box-shadow: ${elements.box_shadow};
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: ${palette.blue_secondary};
  }
  &:disabled,
  &:disabled:hover {
    background-color: ${palette.grey_primary};
    color: grey;
    cursor: not-allowed;
  }
`
