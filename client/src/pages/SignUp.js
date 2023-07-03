import React from 'react'
import InputField from '../components/InputField'
import Button from '../components/Button'

const SignUp = () => {
  
  const handleSignUpClick = () => {
    fetch('/signup', {
      method: 'POST',
      redirect:"follow"
    })
      .then(response => {
        // Handle the response if needed
        if(response.redirected){
          window.location.replace(response.url);
        }
      })
      .catch(error => {
        // Handle the error if the POST request fails
      });
  };  

  return (
      <form action="/signup" method="post" className='container1'>
        <InputField title="Username" type="text" name="username" variant="profile"/>
        <InputField title="Password" type="password" name="password" variant="profile"/>
        <input
          type="submit"
          value="SignUp"
          style={{
            background: "#FA8F05",
            boxSizing: "border-box",
            borderRadius: "999em",
            border: "2px solid #F86F03",
            padding: "5px 30px",
            fontWeight: "600",
            width: "auto",
            color: 'white'
            }}
        />

      </form>
  )
}

export default SignUp