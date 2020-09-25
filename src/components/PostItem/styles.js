import styled from 'styled-components'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

export const PostItemLink = styled(Link)`
  display:flex;
  color:white;
  &:not(:last-child) {
      margin-bottom: 2rem;
    }
`;

export const PostItemWrapper = styled.section``;

export const PostItemThumb = styled(Img)`
  display:block;
  height: 120px;
  width: 150px;
  object-fit:cover;
`;
export const PostItemInfo = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:2rem;
`;
export const PostItemDate = styled.time`
  font-size:var(--small);
  font-weight:300;
  color:var(--black);
`;
export const PostItemTitle = styled.h1`
  font-size:var(--xlarge);
  font-weight:bold;
  color:var(--black);
  margin-top:2rem;
  
`;
export const PostItemDescription = styled.p`
  margin-top:2rem;
  font-size:var(--medium);
  font-weight:300;
  color:var(--black);
  margin-bottom:3rem;
`;