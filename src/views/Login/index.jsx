import React, {useState} from 'react'
import styled from 'styled-components';

const Login = () => {

    const [user, setUser]=useState('');
    const [password, setPassword]=useState('');

    const handleChange = ({target: {value, name}})=> {
        if( name === 'user'){
            setUser(value);
        }else if( name === 'password' ){
            setPassword(value);
        }
    }

    return (  
        <Container>
            <form className="card shadow p-2 w-1/2">
                <h2 className="text-center text-4xl" >Your Galery</h2>
                <div className="form-control">
                    <input type="text" placeholder="Usuario" value={user} name="user" onChange={handleChange} className="input input-bordered my-2"/>
                    <input type="password" placeholder="Contraseña" value={password} name="password" onChange={handleChange} className="input input-bordered my-2"/>
                    <button className="btn btn-accent my-2">Ingresar</button>
                </div>
            </form>
        </Container>
    );
}
 
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Login;