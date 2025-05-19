import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => signInWithEmailAndPassword(auth, email, password);
  const signup = () => createUserWithEmailAndPassword(auth, email, password);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Login or Sign Up</h2>
      <input className="border p-2 w-full mb-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input className="border p-2 w-full mb-4" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={login}>Log In</button>
      <button className="bg-green-500 text-white px-4 py-2" onClick={signup}>Sign Up</button>
    </div>
  );
}
