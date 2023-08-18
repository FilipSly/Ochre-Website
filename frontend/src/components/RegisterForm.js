import { useState } from "react"
import Modal from "./Modal"

import { motion, AnimatePresence } from "framer-motion"

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isVisible, setIsVisible] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault()

        if (isVisible === false) {
            setIsVisible(true)
        } else {
            setIsVisible(false);
        }

        const user = { username, email, password }

        if (username.length < 1) {
            setError('Username cannot be Blank!');
            return
        }
        else if (email.length < 1) {
            setError('Email cannot be Blank!');
            return
        }
        else if (password.length < 1) {
            setError('Password cannot be Blank!');
            return
        }

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const resp = await response.json()

        if (resp.error) {
            if (resp.error.includes('username')) {
                setError('Username already exists!')
            } else if (resp.error.includes('email')) {
                setError('Email already in use!')
            }
        }
        else {
            setUsername('')
            setEmail('')
            setPassword('')
            setError('Success!')
            console.log('New user registered!', resp)
        }
    }

    return (
        <form classname="register" onSubmit={handleRegister}>
            <h1>Register</h1>

            <label>Username: </label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            <p> </p>
            <label>Email Address: </label>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <p> </p>
            <label>Password: </label>
            <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <p> </p>
            <button>Register</button>
            <AnimatePresence>{isVisible && <Modal text={error} />}</AnimatePresence>
        </form>
    )
}

export default RegisterForm