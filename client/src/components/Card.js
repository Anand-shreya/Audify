import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const CardStyled=styled.div`
  display: block;
  color: #19F3FF;
  font-size: 20px;
  font-weight: 600;
  padding:20px;
`

const Card = ({pic,title,path,color}) => {
  return (
    <CardStyled>
        <img className="logo" src={pic} alt="add" />
        <Button variant="black" title={title} path={path} color={color}/>
    </CardStyled>
  )
}

export default Card