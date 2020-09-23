import styled from 'styled-components';
import Img from 'gatsby-image'
import media from 'styled-media-query'

export const Avatar = styled(Img).attrs({
  alt:'André L. Silveira',
  'arial-label': 'André L. Silveira'
})`
  border-radius:50%;
  display:block;
  height:4.8rem;
  width:4.8rem;
  object-fit:cover;

  ${media.lessThan('large')`
    height: 3.2rem;
    width:  3.2rem;
  `}
`;
