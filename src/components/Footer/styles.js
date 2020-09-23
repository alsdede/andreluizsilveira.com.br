import styled from 'styled-components';

export const Footer = styled.footer.attrs({
  'role':'dialog'
})`
  display:flex;
  align-items:center;
  justify-content:center;
  height:4rem;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  z-index:99;
  background:linear-gradient(to right, rgba(255,0,0,0), var(--borders));
  box-shadow: 2px 3px 4px gray;
`;
