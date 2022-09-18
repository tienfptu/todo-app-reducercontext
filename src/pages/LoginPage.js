import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email === 'admin@tien.com' && password === 'admin') {
      navigate('/')
    } else {
      alert('Fail')
    }
  }

  return (
    <div>
      <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
      <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
