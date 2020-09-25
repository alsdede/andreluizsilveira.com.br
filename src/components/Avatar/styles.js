import styled from 'styled-components';
import Img from 'gatsby-image'
import media from 'styled-media-query'

export const Avatar = styled(Img).attrs({
  alt:'André L. Silveira',
  'arial-label': 'André L. Silveira'
})`
  border-radius:50%;
  display:block;
  height: var(--headerMedium);
  width: var(--headerMedium);
  object-fit:cover;

  ${media.lessThan('large')`
    height: var(--headerSmall);
    width:  var(--headerSmall);
  `}
`;
