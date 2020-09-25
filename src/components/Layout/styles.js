import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.section`
  display:flex;
`;

export const LayoutMain = styled.main`
  background: var(--white);
  min-height: 100vh;
  margin-top:var(--headerLarge);
  margin-bottom:var(--footer);
  padding-top:3.2rem;
  padding-bottom:9.6rem;
  width: 100%;
  ${media.lessThan('large')`
    height: var(--headerSmall);
  `}
`;