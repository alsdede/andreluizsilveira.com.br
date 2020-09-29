import styled from 'styled-components';
import media from 'styled-media-query'

export const BlogWrapper = styled.div`
  display:flex;
  position:relative;
  ${media.lessThan('large')`
      flex-direction:column;
    `}
`;

export const AlertBackground = styled.div`
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(0,0,0,0.15);
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index:99;

`;

export const AlertMes = styled.span`
  font-size:var(--xlarge);
  color:var(--white);
  font-weight:bold;
  background:black;
`;
