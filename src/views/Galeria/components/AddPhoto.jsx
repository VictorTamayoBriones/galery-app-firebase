import styled from 'styled-components';

const AddPhoto = () => {
    return (
        <div data-tip="Agregar Foto" class="tooltip tooltip-bottom ">
            <button class="btn btn-outline btn-circle btn-lg">
                <Label htmlFor="file" className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Label>
                <File type="file" id="file"/>
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