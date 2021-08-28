import React, {Children, useContext, useEffect, useState} from 'react'
import { auth } from '../firebase/firebaseConfig';

const AuthContext = React.createContext();

//Hook para acceder al contexto
const useAuth = ()=>{
    return useContext(AuthContext);
}

const ProviderAuth = ({children}) => {
    
    const [user, setUser]=useState(null);

    //Estado para saber cuando termino de caragar la comprobación
    const [loading, setLoading]=useState(true);

    //Efecto para hacer la comprobación solo una vez
    useEffect(()=>{
        //Comprobamos si hay un usuario
        const cancelSuscribe = auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
        })
        return cancelSuscribe;
    }, []);

    //!loading && children
    return(
        <AuthContext.Provider value={{ user: user }} >
            {!loading && children}
        </AuthContext.Provider>
    );
}
 
export { ProviderAuth, AuthContext, useAuth };