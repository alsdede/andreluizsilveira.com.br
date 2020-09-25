import React,{ useEffect,useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Avatar from '../Avatar'
import Container from '../Container'
import Menu from '../Menu'
import * as S from './styles'

const Header = () => {
  const [border,setBorder] = useState('');
  const handleScroll=()=>{
    if (window.pageYOffset > 10) {
        if(!border){
          setBorder("0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)");   
        }
    }else {
      if(border){
        setBorder("");   
      }
    }
   
  }
  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
  })
  return(
    <S.HeaderWrapper style={{boxShadow:`${border}`}}>
        <Container>
      <S.HeaderMain>
        <AniLink
        cover
        bg={"var(--background)"}
        direction="down"
        duration={1}
        to="/"
        title="Voltar para home"
        >
          <S.BrandContainer>
            <Avatar/>
            <S.BrandTitle>andré Silveira</S.BrandTitle>
          </S.BrandContainer>
        </AniLink>
          <Menu/>
      </S.HeaderMain>
        </Container>
    </S.HeaderWrapper>
  )
}

export default Header