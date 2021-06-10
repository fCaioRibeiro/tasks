import React, { useState } from 'react';

const Login = () =>  {
    const [usuario, setUsuarioDate] = useState('');
    const [senha, setSenhaDate] = useState('');

    const handleClick = () => {
 
    }

    const handleInputUsuarioChange = (e) => {
        setUsuarioDate(e.target.value);    
    }

    const handleInputSenhaChange = (e) => {
        setSenhaDate(e.target.value);    
    }

    return (
        <div>
            <form>
                <input onChange={handleInputUsuarioChange} type="text" />
                <input onChange={handleInputSenhaChange} type="password" />
                <button type='button' onClick={handleClick}>Acessar</button>
            </form>
        </div>
    )
} 

export default Login;