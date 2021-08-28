import styled from 'styled-components';
import useObtenerPhotos from '../../../hooks/useObtenerPhtos';
import { motion } from 'framer-motion';

const CardImage = ({ onOpenModal }) => {

    const [photos]=useObtenerPhotos();
    
    return ( 
        <Container>
            {
                photos.length === 0 ? <h2>No hay fotos para mostrar</h2> : 
                photos.map((photo)=>{
                    return(
                        <div    key={photo.id} 
                                className="card shadow-2sm max-w-sm overflow-hidden max-h-48 cursor-pointer " 
                                onClick={()=>onOpenModal(photo.url, photo.nameImage, photo.id)} >
                            <figure>
                                <motion.img src={photo.url} alt={photo.id} 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                />
                            </figure>
                        </div>
                    );
                })
            }
        </Container>
    );
}

const Container = styled.div`
    width: 98%;
    margin: auto;
    padding: 40px 0px;
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    h2{
        font-size: 50px;
        font-weight: bold;
    }
`;

export default CardImage;