import React, { useContext, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

 const Login = () => {

   const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);
    
   const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const { login } = useContext(AuthContext);
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            await login(inputs);
           navigate("/");
        }catch(err){
            setErr(err.response.data);
        }
        
    }
    


    return (
        <div className='middle'>

            <h1 className='login-bold'>Login</h1>
            <form>
                <input type="text" className='username' placeholder='Username' name="username" onChange={handleChange} /><br />
                <input type="password" className='password' placeholder='Password' name="password" onChange={handleChange} /><br />
                
                <button onClick={handleLogin} className='login'>Login</button>
            </form>

        </div>

    )
}

export default Login;