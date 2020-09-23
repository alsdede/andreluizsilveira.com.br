import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  padding-left: 16rem;
  padding-right: 16rem;
  ${media.lessThan('large')`
    max-width:750px;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
  `}
`