import React from 'react'
import logo from '../images/Name.jpg'
import Greet from '../components/Greet'
import Button from '../components/Button'
import clock from '../Icons/clock.png'
import styled from 'styled-components'
import Separator from '../components/Separator'
import { useState } from 'react'

const Top=styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width:100vw;
max-height:40%;
gap:550px;
margin-bottom:10px;
`

const HistoryPage = () => {
  const [audios,setAudios]=useState([
    {title:"title1",id:1},{title:"title1",id:2},{title:"title1",id:3},
    {title:"title1",id:4},{title:"title1",id:5},{title:"title1",id:6}]);
  return (
    <div className="container2">
        <img src={logo}/>
        <Separator/>
        <div className="content">
          <Top>
            <Greet word="History"/>
            <img src={clock} className='Up'/>
          </Top>  
        {audios.map((audio)=>(
          <Button title={audio.title} key={audio.id} variant="black" width="300px" color="#19F3FF"/>
        ))}      
        
        </div>      
    </div>
  )
}

export default HistoryPage