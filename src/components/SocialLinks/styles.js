import styled, { css } from 'styled-components'
import { Twitter, Github, LinkedinIn, Youtube } from '@styled-icons/fa-brands'

const Icon = css`
  & {
    display: block;
    height: 2rem;
    width: 2rem;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  background:var(--background);
  border-top-right-radius:8px;
  border-top-left-radius:8px;
`

export const SocialItem = styled.a.attrs(props => ({
  href: props.href,
  title: props.title,
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  align-items: center;
  color: var(--white);
  display: inline-flex;
  height: 4.0rem;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: color 0.2s;
  will-change: color;
  &:focus,
  &:hover {
    color: var(--highlight);
  }
`

export const SocialYoutube = styled(Youtube)`
  ${Icon}
`

export const SocialTwitter = styled(Twitter)`
  ${Icon}
`

export const SocialGithub = styled(Github)`
  ${Icon}
`

export const SocialLinkedin = styled(LinkedinIn)`
  ${Icon}
`