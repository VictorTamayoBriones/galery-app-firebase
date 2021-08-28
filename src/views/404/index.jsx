import styled from 'styled-components';

const Error404 = () => {
    return ( <Err>Error 404</Err> );
}

const Err = styled.p`
    margin: 50px auto;
    text-align: center;
    font-size: 50px;
    letter-spacing: 3px;
    font-weight: bold;
`;

export default Error404;