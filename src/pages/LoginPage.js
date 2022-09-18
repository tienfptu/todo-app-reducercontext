import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';

const LoginPage = () => {
    const [state] = useStore();

    const user = state.user;

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (user.find((e) => e.email === email && e.password === password)) {
            navigate('/home');
        } else {
            alert('Fail');
        }
    };

    return (
        <div>
            <h2> Login Page</h2>
            <label>Email: </label>
            <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br></br>
            <label>Password: </label>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br></br>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
