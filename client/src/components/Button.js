import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const ButtonStyle=styled.div`
  background: ${(props)=>props.variant==="black"?"transparent":"#FA8F05"};
  box-sizing: border-box;
  border-radius: 999em;
  border: ${(props)=>props.variant==="black"?"1px":"2px"} solid ${(props)=>props.variant==="black"?"#FFFFFF":"#F86F03"};
  padding: 5px 30px;
  font-weight: 600;
  margin-top:${(props)=>props.variant==="black"?"30px":"auto"};
  width:${(props)=>props.width?props.width:"auto"};

  &:hover{
    background:${(props)=>props.variant==="black"?"#454545":"#FFA41B"};
  }
  &:nav{
    color: white;
    text-decoration:none;
  }
`

const Button = ({variant,width,title,path,color,handleClick}) => {
  return (
    <div>
      <ButtonStyle variant={variant} 
      width={width}><NavLink className="nav" to={path} onClick={handleClick} style={{
        color:color,
        textDecoration:"none",
      }} >{title}</NavLink></ButtonStyle>
    </div>
  )
}

export default Button