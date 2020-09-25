import styled from 'styled-components';

export const Card = styled.section`
  display:flex;
  background:var(--white);
  min-height:18rem;
  height:100%;
  box-shadow: var(--borders);
  border-bottom: 1px solid gray;
  border-radius:2px;
  position:relative;
  width:100%;
  padding:2rem;
  transition:transform 0.3s ease-in;

  &:before,
  &:after {
    content:'';
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    top:0;
    transition:transform 0.3s linear;
  }
  &:before {
    border-left: 1px solid var(--background);
    border-right: 1px solid var(--background);
    
    transform: scaleY(0);
  }
  &:after {
    border-bottom: 1px solid var(--background);
    border-top: 1px solid var(--background);
   
    transform: scaleX(0);
  }
  &:hover {
    transform: translateY(-2px);
    &:before {
      transform: scaleY(1)
    }
    &:after {
      transform: scaleX(1)
    }
  }
  
`;
