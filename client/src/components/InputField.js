import React from 'react'
import styled from 'styled-components'

const Input=styled.input`
  background: ${(props)=>props.variant==="profile"?"black":"#FA8F05"};
  text-align: center;
  border: ${(props)=>props.variant==="profile"?"1px":"2px"} solid ${(props)=>props.variant==="profile"?"#FFF4F4":"#F86F03"};
  box-sizing: border-box;
  padding: 5px 30px;
  margin:20px;
  border-radius: 999em;
  font-weight: 600;
  width: ${(props)=>props.variant==="profile"?"400px":"200px"};
  color: #19F3FF;

  &::placeholder{
    color: ${(props)=>props.variant==="profile"?"#19F3FF":"#FFFFFF"};
  }
`
const InputField = (props) => {
  return (
    <Input type={props.type} 
    placeholder={props.title} 
    name={props.name}
    variant={props.variant}
    />        
  )
}

export default InputField