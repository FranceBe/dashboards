import styled from 'styled-components'
import { spaces } from 'styles/variables'
export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    text-align: center;
  }
`
export const InfoTableContainer = styled.div`
  width: 90%;
  align-self: center;
  margin-top: ${spaces.large};
`

export const ChartsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
