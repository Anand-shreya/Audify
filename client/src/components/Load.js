import React from 'react'
import Separator from './Separator'
import Header from './Header'
import Card from './Card'
import logo from '../images/Name.jpg'


const Load = ({headImg,centerImg,title,variant}) => {
  return (
    <div className="container2">
        <img src={logo}/>
        <Separator/>
        <div className="content">
          <Header pic={headImg}/>
          <Card title={title} pic={centerImg} variant={variant} color="#19F3FF"/>
        </div>
    </div>
  )
}

export default Load