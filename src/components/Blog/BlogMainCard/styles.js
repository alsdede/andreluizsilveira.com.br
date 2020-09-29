import styled from 'styled-components';
import media from 'styled-media-query'
import backgroundImg from '../../../images/desert.jpg';
import profile from '../../../images/profile.png';

export const BlogWrapper = styled.section`
  display:flex;
  position:relative;
  width:66.7%;
  min-height:50rem;

  padding:2rem;
  ${media.lessThan('large')`
      width:100%;
    `}

`;
export const BackgroundContainer = styled.div`
  display:flex;
  flex:1;
  border-radius:6px;
  background-image:url(${backgroundImg});
  background-size: cover;
`;
export const ContainerWrapper = styled.div`
  display:flex;
  background:var(--white);
  flex-direction:column;
  padding:2rem;
  max-width:85%;
  border-radius:1px;
  box-shadow: -1px 1px 2px 0 rgba(0,0,0,.25);
  position:absolute;
  bottom:-2px;
  left:-2px;



`;
export const Title = styled.h1`
  font-size:3rem;
  font-weight:400;
  color:var(--borders);
`;
export const ContainerInfo = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;

`;
export const AuthorWrapper = styled.div`
  display:flex;
  align-items:center;
`;
export const Avatar = styled.div`
  height:4rem;
  width:4rem;
  border-radius:50%;
  background:blue;
  margin-top:1rem;
  background-image:url(${profile});
  background-size: cover;

`

;
export const Name = styled.h2`
  font-size:var(--medium);
  color:var(--black);
  margin-left:1rem;
`;
export const DateWrapper = styled.div``;
export const Date = styled.span`
  font-size:var(--medium);
  color:var(--black);
`;
export const Ribbon = styled.div`
  position:absolute;
  top:50px;
  left:10px;
  background:purple;
  border-top-right-radius:20px;
  border-bottom-right-radius:20px;
  padding:0.8rem 1.2rem;


`;
export const Category = styled.span`
  font-size:var(--medium);
  font-weight:bold;
  color:var(--white);
`;
