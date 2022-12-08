import React, { useState } from 'react';
import client from '../server/appwrite';
import { useNavigate } from 'react-router-dom';
import { Account } from 'appwrite';


function Login() {

    const navigate = useNavigate();
    const account = new Account(client);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault()

    const promise = account.createEmailSession(email, password);
    promise.then(function (response) {
        console.log(response); // Success
        navigate("/dashboard");
    }, function (error) {
        console.log(error); // Failure
    })};

  return (
    <div>
        <div>Login</div>
        <form>
            <input type='email' name='email' label='email' id='email' autoComplete='email' required placeholder='이메일' onChange={(e) => setEmail(e.target.value)} /><p />
            <input type='password' name='password' label='password' id='password' autoComplete='password' required placeholder='비밀번호' onChange={(e) => setPassword(e.target.value)}/><p />
            <button onClick={loginUser}>로그인</button>
        </form>
    </div>
  )
}

export default Login