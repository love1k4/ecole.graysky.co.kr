import React, { useState } from 'react';
import client from '../server/appwrite';
import { Account, ID } from 'appwrite';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
    const account = new Account(client);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const addNewUser = async (e) => {
        e.preventDefault()
    
    const promise = account.create(ID.unique(), email, password, name);
    promise.then(function (response) {
        console.log(response); // Success
        navigate("/dashboard");
    }, function (error) {
        console.log(error); // Failure
    })};

  return (
    <div>
        <div>Signup</div>
        <form>
            <input type='text' name='name' label='name' id='name' autoComplete='name' required placeholder='사용자 이름' onChange={(e) => setName(e.target.value)} /><p />
            <input type='email' name='email' label='email' id='email' autoComplete='email' required placeholder='이메일' onChange={(e) => setEmail(e.target.value)} /><p />
            <input type='password' name='password' label='password' id='password' autoComplete='password' required placeholder='비밀번호' onChange={(e) => setPassword(e.target.value)}/><p />
            <button onClick={addNewUser}>회원가입</button>
        </form>
    </div>
  )
}

export default Signup