import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header.attrs({
  role: 'banner',
})`
  display:block; 
  position:fixed;
  background:var(--white);
  left:0;
  right:0;
  top:0;
  width:100%;  
  transition:box-shadow 0.5s ease-in-out;
  z-index:99;
`;

export const HeaderMain = styled.div`
  display:flex;  
  align-items:center;
  height:var(--headerLarge);
  justify-content:space-between;
  > a {
  text-decoration:none;
  }

  ${media.lessThan('large')`
    height: var(--headerSmall);
  `}
`;

export const BrandContainer = styled.div`
  display:flex;
  align-items:center;
`;

export const BrandTitle = styled.h1`
  color:var(--black);
  display:inline-block;
  font-size:var(--large);
  letter-spacing:1;
  text-transform:lowercase;
  font-weight:bold;
  margin-left:1.4rem;
  transition:font-size 0.2s ease-in-out;
  &:hover{
    font-size:var(--xlarge);
  }
`;