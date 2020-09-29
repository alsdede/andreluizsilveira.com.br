import styled,{ css } from 'styled-components';
import Image from '../../images/andre.png';
import media from 'styled-media-query'
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare'
import { Github } from '@styled-icons/boxicons-logos/Github'

const Icon = css`
  & {
    display: block;
    height: 3rem;
    width: 3rem;
    color:var(--background);
    margin-right:1rem;
    transition:color 0.2s;
    &:hover {
    color:var(--highlight);

  }
  }
`
export const AboutWrapper = styled.div`
display:flex;

  ${media.lessThan('large')`
    flex-direction:column;
    align-items:center;
    `}


`;
export const AboutInfo = styled.div`
display:flex;
padding:2rem;

flex-direction:column;
max-width:50%;
${media.lessThan('large')`
    max-width:100%;
    `}
`;
export const Title = styled.h1`
  font-size:22px;
  font-weight:300;
  line-height:3rem;
  color:#666;
  strong {
    font-size:32px;
    font-weight:bold;
    color:#666;
  }
`;
export const SubTitle = styled.h3`
  font-size:20px;
  color:#666;

`;
export const Description = styled.p`
  margin-top:20px;
  font-size:20px;
  font-weight:300;
  line-height:3rem;
  color:#666;
  letter-spacing:1px;

  strong {
    font-weight:bold;
  }
`;
export const SocialContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top:2rem;
  ${media.lessThan('large')`
    flex-direction:column;
    align-items:center;
    `}
`;
export const SocialTitle = styled.span`
  margin-top:1rem;
  font-size:var(--large);
  color:var(--background);
`;
export const SocialItem = styled.a`
  display:flex;
  align-items:center;
  margin-top:1rem;
  text-decoration:none;
  font-size:2rem;

  &:hover {
    color:var(--highlight);

  }
`;


export const SocialGithub = styled(Github)`
  ${Icon}
`

export const SocialLinkedin = styled(LinkedinSquare)`
  ${Icon}
`
export const SkillsContainer = styled.div`
display:flex;
flex-direction:column;
flex:1;
max-width:50rem;
padding:2rem;

`;
export const SkillsBoard = styled.div`
  display:flex;
  width:100%;
  height:25rem;

`;
export const SkillWrapper = styled.div``;
export const SkillTitle = styled.div`
  display:flex;
  justify-content:center;
  margin-left:10px;
  margin-top:10px;
  font-size:28px;
  font-weight:bold;
  color:var(--background);
`;
export const SkillRow = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
`;
export const SkillItemWrapper = styled.div`
  display:flex;
  margin-top:15px;

  position:relative;
  background:var(--background);

  align-items:center;
  justify-content:center;
  box-shadow: 0px -1px 6px 1px rgba(255,255,255,0.15);

  flex-wrap:wrap;
  padding:1rem;
  transition:transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.2);
    z-index:10;

  }

`;
export const SkillDot = styled.div`
  position:absolute;
  top:5px;
  left:48%;
  height:4px;
  width:4px;
  border-radius:50%;
  background:red;
  box-shadow: 0px -1px 1px 1px rgba(0,0,0,0.35);
`;
export const SkillItem = styled.a`
  font-size:12px;
  font-weight:bold;
  color:white;
  text-justify:auto;
  text-decoration:none;
`;

export const SkillImageWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
  ${media.lessThan('large')`
    justify-content:center;
    `}
`;
export const SkillImage = styled.div`
    margin-top:-40px;
    height:20rem;
    width:50%;
    background-image:url(${Image});
    background-size: cover;
    z-index:90;
    box-shadow: 0 4px 2px -2px rgba(0,0,0,0.31);
`;

