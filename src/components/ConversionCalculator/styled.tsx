import styled from 'styled-components'

export const Result = styled.div`
  visibility: ${(props: { visible: boolean }) => props.visible ? 'visible' : 'hidden'};
  font-size: 1.9em;
  font-weight: 600;
  text-align: center;
  margin: 2rem 0;
`
