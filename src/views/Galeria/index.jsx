import React, {useState} from 'react'
import styled from 'styled-components';
import AddPhoto from './components/AddPhoto';
import Progress from './components/Progress';
import CardImage from './components/CardImage';

const Galery = () => {

    const [file, setFile]=useState(false);

    const handleChangeFile = (e)=>{
        let selected = e.target.files[0];
        setFile(true);
        console.log(selected);
    }

    return (  
        <Container>
            <AddPhoto onChangeFile={handleChangeFile} />
            { file && <Progress />}
            <CardImage/>
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