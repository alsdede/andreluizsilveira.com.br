import styled from 'styled-components';

export const Footer = styled.footer.attrs({
  'role':'dialog'
})`
  display:flex;
  align-items:center;
  justify-content:center;
  height:var(--footer);
  position:fixed;
  left:-40px;
  top:50%;
  transform:rotate(90deg);
  bottom:0;
  z-index:99;
  background:var(--white);
  box-shadow: 2px 3px 4px gray;
`;
