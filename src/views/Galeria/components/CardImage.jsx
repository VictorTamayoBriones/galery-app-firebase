import styled from 'styled-components';

const CardImage = () => {
    return ( 
        <Container>
        <div className="card shadow-2sm max-w-sm overflow-hidden max-h-48 cursor-pointer ">
            <figure>
                <img src="https://picsum.photos/id/1005/400/250" alt="" />
            </figure>
        </div>
        <div className="card shadow-2sm max-w-sm overflow-hidden max-h-48 cursor-pointer ">
            <figure>
                <img src="https://picsum.photos/id/1005/400/250" alt="" />
            </figure>
        </div>
        <div className="card shadow-2sm max-w-sm overflow-hidden max-h-48 cursor-pointer ">
            <figure>
                <img src="https://picsum.photos/id/1005/400/250" alt="" />
            </figure>
        </div>
        <div className="card shadow-2sm max-w-sm overflow-hidden max-h-48 cursor-pointer ">
            <figure>
                <img src="https://picsum.photos/id/1005/400/250" alt="" />
            </figure>
        </div>
        <div className="card shadow-2sm max-w-sm overflow-hidden max-h-48 cursor-pointer ">
            <figure>
                <img src="https://picsum.photos/id/1005/400/250" alt="" />
            </figure>
        </div>
        <div className="card shadow-2sm max-w-sm overflow-hidden max-h-48 cursor-pointer ">
            <figure>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0db3fb32752957.5692a9a599011.jpg" alt="" />
            </figure>
        </div>
        <div className="card shadow-2sm max-w-sm overflow-hidden max-h-48 cursor-pointer ">
            <figure>
                <img src="https://picsum.photos/id/1005/400/250" alt="" />
            </figure>
        </div>
        <div className="card shadow-2sm max-w-sm overflow-hidden max-h-48 cursor-pointer ">
            <figure>
                <img src="https://picsum.photos/id/1005/400/250" alt="" />
            </figure>
        </div>
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
`;

export default CardImage;