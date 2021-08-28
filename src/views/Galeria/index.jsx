import React, {useState} from 'react'
import styled from 'styled-components';
import AddPhoto from './components/AddPhoto';
import Progress from './components/Progress';
import CardImage from './components/CardImage';
import LogOut from './components/LogOut';
import Modal from './components/Modal';
import { auth, db, storage } from '../../firebase/firebaseConfig';
import { useHistory } from 'react-router';

const Galery = () => {

    const history = useHistory();
    const types = ['image/png', 'image/jpeg'];
    const [file, setFile]=useState(null);
    const [modal, setModal]=useState({
        open: false,
        image: null, 
        nameImage: null,
        id: null
    });

    const handleChangeFile = (e)=>{
        let selected = e.target.files[0];
        if( selected && types.includes(selected.type) ){
            setFile(selected);
        }else{
            alert('Usa un archivo PNG o JPEG');
            setFile(null);
        }
    }

    const fileNull = ()=> setFile(null);
    
    const handleModal = (image, name, id)=>{
        setModal({
            open: !modal.open,
            image: image,
            nameImage:  name,
            id: id
        })
    }

    const logOut = async ()=>{
        try{
            await auth.signOut();
            history.push('/login');
        }catch(err){
            alert(err);
        }
    }

    const deleteImage = (idImage, nameImage)=> {
        let storageRef = storage.ref(nameImage);
        setModal({
            open: false,
            image: null,
            nameImage: null,
            id: null
        })
        db.collection('images').doc(idImage).delete();
        storageRef.delete();
    }
    

    return (  
        <Container>
            <AddPhoto onChangeFile={handleChangeFile} />
            <LogOut onOut={logOut} />
            { file && <Progress file={file} onNull={fileNull} />}
            <CardImage onOpenModal={handleModal} />
            <Modal dataModal={modal} onCloseModal={handleModal} onDelete={deleteImage} />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 12px 0px;
`;

export default Galery;