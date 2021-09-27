import styled from 'styled-components'

export const LoadingContainer = styled.div`
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(-360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  position: absolute;
  right: 50%;
  top: 50%;
  z-index: 1;

  svg {
    width: 70px;
    height: 70px;
    -webkit-animation: spin 2s linear infinite;
    -moz-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }
`
