import React from 'react'
import InputField from '../components/InputField'
import Button from '../components/Button'

const Login = () => {
  return (
    <div className="container1">
        <InputField title="Username" type="text" name="username" variant="profile"/>
        <InputField title="Password" type="password" name="password" variant="profile"/>
        <Button title="Login" color="#ffffff"/>
    </div>
  )
}

export default Login