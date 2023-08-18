import { useState } from "react"

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleRegister = async (e) => {
        e.preventDefault()

        const user = { username, email, password }

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setUsername('')
            setEmail('')
            setPassword('')
            setError(null)
            console.log('New user registered!', json)
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
        </form>
    )
}

export default RegisterForm