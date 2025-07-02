import React, { useState } from 'react'

export default function Signup() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [regno,setRegno] = useState("");
    return (
        <form>
            <label htmlFor="">username</label>
            <input type="text" name="" id="" onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor="">Register no</label>
            <input type="text" name="" id="" onChange={(e) => setRegno(e.target.value)}/>
            <button type="submit">Sign up</button>
        </form>    
    )
}
