import { useState, useEffect } from 'react'
import { storage, db } from '../firebase/firebaseConfig';
import { useAuth } from '../context/authContext';

const useStorage = (file) => {
    
    const [progress, setProgress]=useState(0);
    const [err, setErr]=useState(null);
    const [url, setUrl]=useState(null);

    const {user}=useAuth();

    useEffect(()=>{

        const storageRef = storage.ref(file.name);

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
            console.log(percentage);
        }, (err)=>{
            setErr(err);
        }, async ()=>{
            const url = await storageRef.getDownloadURL();

            if(url){
                await db.collection('images').add({url, userUid: user.uid, nameImage: file.name});
                setUrl(url);
            }

        })

    }, [file, user.uid]);
    return { progress, url, err }
}
 
export default useStorage;