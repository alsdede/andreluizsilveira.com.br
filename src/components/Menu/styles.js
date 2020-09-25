import styled from 'styled-components';

export const Menu = styled.div`
  display:flex;
  > a {
    position:relative;
    color:var(--black);
    align-items:center;
    display:inline-flex;
    font-size:var(--large);
    text-decoration:none;
    text-align:center;
    margin-left:2rem;
    transition: color 0.3s;

    &.active{
      color:var(--highlight);
    }
    &:hover,&:focus {
      color:var(--highlight);
    }
    &:hover {
      &::after {
        content: '';
        position: absolute;
        bottom:-4px;
        display: block;
        height: 0.3rem;
        border-radius:1;
        background-color:var(--highlight);
        animation: hoverAnimation 0.3s forwards;

       
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
  }
  }
  
`;
