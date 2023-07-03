import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const CardStyled=styled.div`
  display: flex;
  color: #19F3FF;
  font-size: 20px;
  font-weight: 600;
  padding:20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Card = ({pic,title,path,color,handleClick,width}) => {
  return (
    <CardStyled>
        <img className="logo" src={pic} alt="add" />
        <Button variant="black" title={title} path={path} color={color} handleClick={handleClick} width={width}/>
    </CardStyled>
  )
}

export default Card