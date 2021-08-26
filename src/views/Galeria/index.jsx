import React, {useState} from 'react'
import styled from 'styled-components';
import AddPhoto from './components/AddPhoto';
import Progress from './components/Progress';
import CardImage from './components/CardImage';

const Galery = () => {

    const [subiendo, setSubiendo]=useState(false);

    return (  
        <Container>
            <AddPhoto/>
            { subiendo && <Progress/>}
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