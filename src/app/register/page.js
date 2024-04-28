"use client"
import React, { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          });
          if (response.ok) {
            console.log('response.ok');
          } else {
            console.error('Error registering user:', response.statusText);
          }
    };

    return (
        <div className="mt-10 ">
            <h1 className="text-red-500 text-4xl text-center">Register</h1>
            <form className="max-w-xs mx-auto" onSubmit={handleSubmit}>
                <input type="email" placeholder="email"
                    onChange={handleEmailChange}
                    value={email}
                    className="bg-gray-200 p-2 w-full block border-gray-300 mt-3 justify-center flex rounded-xl"></input>
                <input type="password" placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="bg-gray-200 p-2 w-full block border-gray-300 mt-3 justify-center flex rounded-xl"></input>
                <button type="submit"
                    className="bg-primary text-white text-center border border-gray-300 p-1 rounded-xl block w-full mt-3">Register</button>
                <div className="text-center text-gray-500">or</div>
                <button type="submit"
                    className="text-gray-500 text-center border border-gray-300 p-1 rounded-xl block w-full mt-3 justify-center flex gap-4">
                    <img src="google.png" width={20} height={20} className=""></img>
                    Login with google
                </button>

            </form>

        </div>
    )
}