import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");
  const navigate=useNavigate();

  const validate=()=>{
    if(!email) return "Email is required";
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email";
    if(!password||password.length<6) return "Password must be at least 6 characters";
    return null;
  };

  function handleSubmit(e){
    e.preventDefault();
    const err=validate();
    if(err) return setError(err);
    setError("");
    setTimeout(()=>navigate("/dashboard"),600);
  }

  return(<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">
      <h1 className="text-2xl font-semibold mb-2">Login</h1>
      <p className="text-gray-500 text-sm mb-6">Sign in to access your dashboard</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div><label className="text-sm">Email</label>
        <input className="w-full border px-3 py-2 rounded mt-1" value={email} onChange={e=>setEmail(e.target.value)}/></div>
        <div><label className="text-sm">Password</label>
        <input type="password" className="w-full border px-3 py-2 rounded mt-1" value={password} onChange={e=>setPassword(e.target.value)}/></div>
        {error&&<p className="text-red-600 text-sm">{error}</p>}
        <button className="w-full bg-indigo-600 text-white py-2 rounded">Sign In</button>
      </form>
    </div></div>);
}