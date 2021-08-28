import { useState, useEffect } from 'react'
import { db } from '../firebase/firebaseConfig';
import { useAuth } from '../context/authContext';

const useObtenerPhotos = () => {

    const { user } = useAuth();
    const [photos, setPhotos]=useState([]);

    useEffect(()=>{
        const unsuscribe = db.collection('images')
        .where('userUid', '==' , user.uid)
        .onSnapshot((snapshot)=>{

            setPhotos(snapshot.docs.map((photo)=>{
                return{...photo.data(), id: photo.id}
            }));

        });
        return unsuscribe;
    }, [user.uid]);
    return[photos];

}
 
export default useObtenerPhotos;