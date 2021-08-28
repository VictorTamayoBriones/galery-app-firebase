import { useEffect } from "react";
import useStorage from "../../../hooks/useStorage";

const Progress = ({ file, onNull }) => {

    const { progress, url } = useStorage(file);

    useEffect(()=>{
        if(url){
            onNull();
        }
    }, [onNull, url]);

    return (
        <progress className="progress progress-accent w-1/2 m-4 " value={progress} max="100"></progress> 
    );
}
 
export default Progress;