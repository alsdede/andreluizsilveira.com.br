import styled from 'styled-components';
import {Tags} from '@styled-icons/fa-solid/Tags'
export const TagsWrapper = styled.div`
  display:flex;
  align-items:center;
  flex-wrap: wrap;
`;

export const TagItem = styled.span`
  font-size:1rem;
  font-weight:bold;
  color:var(--white);
  padding:0.2rem 0.6rem;
  background:var(--background);
  border:1px solid var(--white);
  border-radius:6px;
  margin-right:1rem;
`;

export const TagIcon = styled(Tags)`
  display: block;
  margin-right: 1.2rem;
  width: 1.6rem;
  color:var(--background);
  `