import React from 'react'
import InputField from '../components/InputField'
import Button from '../components/Button'

const SignUp = () => {
  return (
    <div className="container1">
        <InputField title="Name" type="text" name="name" variant="profile"/>
        <InputField title="Username" type="text" name="username" variant="profile"/>
        <InputField title="Password" type="password" name="password" variant="profile"/>
        <Button title="Create Account" color="#ffffff" />
    </div>
  )
}

export default SignUp