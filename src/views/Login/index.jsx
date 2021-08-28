import React, {useState} from 'react'
import styled from 'styled-components';
import { auth } from '../../firebase/firebaseConfig';
import { useHistory } from 'react-router';

const Login = () => {

    const [user, setUser]=useState('');
    const [password, setPassword]=useState('');
    const history = useHistory();

    const handleChange = ({target: {value, name}})=> {
        if( name === 'user'){
            setUser(value);
        }else if( name === 'password' ){
            setPassword(value);
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        //Comprobamos que se ingrese un correo
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+/
        if( !expresionRegular.test(user) ){
            alert('Ingresa un Email');
            return;
        }

        if( user === '' || password === '' ){
            alert('LLena los campos');
        }

        try{
            await auth.signInWithEmailAndPassword(user, password);
            history.push('/');
        }catch(err){
            alert(err);
        }
    }

    return (  
        <Container>
            <form className="card shadow p-2 w-1/2" onSubmit={handleSubmit} >
                <h2 className="text-center text-4xl" >Your Galery</h2>
                <div className="form-control">
                    <input type="text" placeholder="Usuario" value={user} name="user" onChange={handleChange} className="input input-bordered my-2"/>
                    <input type="password" placeholder="Contraseña" value={password} name="password" onChange={handleChange} className="input input-bordered my-2"/>
                    <button type="submit" className="btn btn-accent my-2">Ingresar</button>
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