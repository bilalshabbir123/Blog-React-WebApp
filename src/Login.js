import React, { useState } from 'react'

export default function Login() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [userErr, setError] = useState(false)
  const [passErr, setPass] = useState(false)
  function loginHandle(e) {

    e.preventDefault();
    if (user.length < 3 || password.length < 3) {
      alert('Type Correct Values');
    }
  }
  function userHandler(e) {
    let a = e.target.value;
    console.log(e.target.value.length);
    if (a.length < 3) {
      setError(true);
    }
    else {
      setError(false);
    }
    setUser(a);
  }
  function passwordHandler(e) {
    let a = e.target.value;
    console.log(e.target.value.length);
    if (a.length < 3) {
      setPass(true);
    }
    else {
      setPass(false);
    }
    setPassword(a);
  }
  return (
    <div>
      <h1>Bilal</h1>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder='Enter User ID' onChange={userHandler} />{userErr ? <span>User Not Valid</span> : ""}
        <br /><br />
        <input type="text" placeholder="Enter User Password" onChange={passwordHandler} />{passErr ? <span>Password Error</span> : ""}
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
