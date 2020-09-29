import styled from 'styled-components';
import media from 'styled-media-query'

export const BlogWrapper = styled.div`
  display:flex;

  ${media.lessThan('large')`
      flex-direction:column;
    `}
`;
