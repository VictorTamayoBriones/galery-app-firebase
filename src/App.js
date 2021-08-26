import React, {useState} from 'react';
import Login from "./views/Login";
import Galery from "./views/Galeria";
import { Route, Redirect } from 'react-router-dom'

function App() {

  const [active, setActive]=useState(false);

  return (
    <>
        {active ? <Route path='/' component={Galery} exact={true} /> : <Redirect to='/login' />}
        <Route path='/login' component={Login} />
    </> 
  );
}


export default App;
