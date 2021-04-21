import React from 'react';

const Input = ({ inputId, handleChange }) => {
    return (
        <>  
            <input type="text" id={inputId} placeholder="Type name" onChange={handleChange} />
        </>

    );
}

export default Input;





