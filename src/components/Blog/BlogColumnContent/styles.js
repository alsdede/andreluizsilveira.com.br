import styled from 'styled-components';
import media from 'styled-media-query'
import backgroundImg from '../../../images/desert.jpg';
import profile from '../../../images/profile.png';


export const ColumnWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width:33.3%;
  max-height:50rem;
  justify-content:space-between;
  ${media.lessThan('large')`
      margin-top:5rem;
      width:100%;
    `}

`;

export const PostItem = styled.div`
  display:flex;
  padding:2rem 2rem;
  height:auto;
  max-height:20rem;

`;

export const BackgroundImage = styled.div`
  width:12rem;
  height:10rem;
  background-image:url(${backgroundImg});
  background-size: cover;
  border-radius:6px;
`;

export const PostInfo = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  margin-left:1rem;
`;
export const PostDate = styled.div`
  display:flex;
  align-items:center;

  padding:0.5rem;
  justify-content:space-between;
`;

export const CategoryWrapper = styled.div`

`;
export const Category = styled.span`
position:relative;
font-size:var(--small);
  font-weight:bold;
  color:blue;

  ::after {
    content:"";
    left:-6px;
    position:absolute;
    width:2px;
    height:100%;
    background:blue;
  }
`;

export const Date = styled.div`
  font-size:var(--small);
  font-weight:300;
  color:var(--black);
`;

export const PostTitle = styled.div`
  margin-top:1rem;
  font-size:var(--large);
  font-weight:300;
  color:var(--black);
`;
export const AuthorWrapper = styled.div`
  display:flex;
  margin-top:auto;
  align-items:center;

`;
export const Avatar = styled.div`
  height:3rem;
  width:3rem;
  background-image:url(${profile});
  background-size: cover;
  border-radius:50%;


`;
export const Name = styled.div`
  margin-left:1rem;
  font-size:var(--small);
  font-weight:300;
  color:var(--black);
`;

export const Separator = styled.div`
  height:1px;
  width:100%;
  background: linear-gradient(90deg, rgba(6,9,43,0.3) 0%, rgba(250,254,255,0) 100%);

`;



