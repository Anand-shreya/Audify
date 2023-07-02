import React from 'react';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="container">
        <div className="buttons">
            <Button title="Login" path="login" color="#ffffff"/>
            <Button title="Sign Up" path="signup" color="#ffffff"/>
        </div>
    </div>
  )
}

export default Home