import React, { useState } from 'react';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@') || password.length < 8) {
            alert('Invalid input');
            return;
        }
        fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        })
            .then(res => {
        if (!res.ok) {
            return res.text().then(text => { throw new Error(text); });  // Get text if not JSON
        }
            return res.json();
        })
        .then(data => {
        alert('Signup successful (stubbed)');
        })
        .catch(err => {
        console.error('Fetch error:', err);
        alert('Signup failed: ' + err.message);
        });
        };

    return (
        <>
            <h1></h1>
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </>
    )    
}

export default SignupForm;