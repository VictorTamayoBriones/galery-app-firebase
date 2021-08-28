import styled from 'styled-components';

const AddPhoto = ({ onChangeFile }) => {

    return (
        <div data-tip="Agregar Foto" className="tooltip tooltip-bottom ">
            <button className="btn btn-outline btn-circle btn-lg">
                <Label htmlFor="file" className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Label>
                <File type="file" id="file" onChange={(e)=>onChangeFile(e)} />
            </button>
        </div>
    );
}

const File = styled.input`
    position: relative;
    display: none;
    z-index: -1;
    top: 0px;
    left: 0px;
    font-size: 17px;
    color: #b8b8b8;
`;

const Label = styled.label`
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default AddPhoto;