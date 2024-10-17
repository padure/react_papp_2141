import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const goToHome = () => navigate('/');
    return (
        <div className='h-dvh flex flex-col space-y-12 justify-center items-center font-extralight text-5xl bg-gray-100'>
            <p>Ne pare rau dar pagina nu exista!</p>
            <button
                onClick={goToHome}
                className='bg-gray-900 text-white px-4 py-1 rounded-md'>
                Home
            </button>
        </div>
    )
}

export default NotFound
