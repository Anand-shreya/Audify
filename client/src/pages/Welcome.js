import React from 'react'
import logo from '../images/Name.jpg'
import Greet from '../components/Greet.js'
import Card from '../components/Card'
import plus from '../Icons/plusCircle.png'
import history from '../Icons/history.png'
import Separator from '../components/Separator'

const Welcome = () => {
  return (
    <div className="container2">
            <img src={logo}/>
            <Separator/>
            <div className="heading">
                <Greet word="Welcome!"/>
                <div className="cards">
                    <Card title="Extract New Audio" pic={plus} path="/upload" color="#19F3FF" />
                    <Separator/>
                    <Card title="View History" pic={history} path="/history" color="#19F3FF"/>
                </div>
            </div>
                             
    </div>
    
  )
}

export default Welcome;