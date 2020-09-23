import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import menuLinks from './content'
import * as S from './styles'

const Menu = () => {
  return(
    <S.Menu>
      {menuLinks.map((link,i)=>(
        <AniLink
        key={i}
        partiallyActive={true}       
        cover
        bg='#123'
        direction="down"
        duration={0.6}
        to={link.url}     
        activeClassName="active"
        >
           {link.label}
      </AniLink>
      ))}
     
    </S.Menu>
  )
}

export default Menu