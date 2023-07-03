import React from 'react'
import logo from '../images/Name.jpg'
import Greet from '../components/Greet.js'
import Card from '../components/Card'
import plus from '../Icons/plusCircle.png'
import Separator from '../components/Separator'

const Welcome = () => {
  return (
    <div className="container2">
            <img src={logo}/>
            <Separator/>
            <div className="heading">
                <Greet word="Welcome!"/>
                    <Card title="Extract New Audio" pic={plus} path="/upload" color="#19F3FF" width="300px" />
            </div>
                             
    </div>
    
  )
}

export default Welcome;