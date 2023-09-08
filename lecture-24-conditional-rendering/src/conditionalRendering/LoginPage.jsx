import React from 'react'

function LoginPage() {
  return (
    <div style={{textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>Welcome to MakeBook. Please Login</h1>
      <input type="text" name="" id="emailField" placeholder='e-mail address'/>
      <input type="password" name="" id="passwordField" placeholder='type password'/>
      <button>LogIn</button>
    </div>
  )
}

export default LoginPage
