import styled from 'styled-components'
import media from 'styled-media-query'
import ImageCard from '../../images/blog.png'

export const ProjectList = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const ProjectCard = styled.div`
   display: flex;
   flex-direction:column;
   justify-content:center;
   max-width:auto;
   padding:2.6rem;
   border-radius:6px;
   background:#f9f9f9;
   box-shadow: -1px 1px 5px 0px rgba(204,204,204,1);
   border:1px solid #ccc;
   transition: all 300ms;
    &:hover{
    transform:scale(1.1);

    }

    ${media.lessThan('large')`
      width:100%;
      max-width:100%;

    `}
`;
export const ProjectItem = styled.div`
  display:block;

`
export const WrapperImage = styled.div`
`;
export const ProjectItemImage = styled.div`
    display: block;
    position:relative;
    margin-bottom: 2.4rem;
    background-image:url(${ImageCard});
    background-size: cover;
    max-width:auto;
    height:200px;
    z-index:9;

`
export const ProjectItemImage2 = styled.div`
    content:'';
      position:absolute;
      background:url(${ImageCard}) no-repeat center;
      top:0;
      right:0;
      bottom:0;
      left:0;
      z-index:10;
      opacity:0;
      transition:opacity .7s ease-in-out;
      &:hover {
        opacity:1;
      }
`;
export const ProjectItemTitle = styled.h1`
  font-size:2.8rem;
`
export const ProjectItemDescription = styled.p`
  font-size:1.4rem;
  line-height:1.5rem;
  color:#666;
  margin-top:1.2rem;
`
