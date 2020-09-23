import styled from 'styled-components';


export const HeaderWrapper = styled.header`
  display:block;
 
  position:fixed;
  left:0;
  right:0;
  top:0;
  width:100%;
  z-index:99;
`;

export const HeaderMain = styled.div`
  display:flex;  
  align-items:center;
  height:6.4rem;
  justify-content:space-between;
`;

export const BrandContainer = styled.div`
  display:flex;
  align-items:center;
`;

export const BrandTitle = styled.h1`
  color:var(--white);
  display:inline-block;
  font-size:var(--large);
  letter-spacing:0.5;
  text-transform:lowercase;
  margin-left:0.8rem;
`;