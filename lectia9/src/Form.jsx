import React, { useEffect, useRef, useState } from 'react';
import axiosClient from './axiosClient.js';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const ageRef = useRef(null);

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get('/employees')
            .then(({ data }) => {
                setEmployees(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const age = ageRef.current.value;
        setEmployees((prevData) => [
            ...prevData,
            { name, email, age }
        ]);
        //Save in JSON
        axiosClient.post('/employees', {
            id: uuidv4(), name, email, age
        });
        nameRef.current.value = '';
        emailRef.current.value = '';
        ageRef.current.value = '';
    }
    return (
        <div className='mt-14'>
            <div className='shadow p-4 mb-8 w-1/3 m-auto'>
                <h1 className='text-lg font-bold'>Gestionarea angajatilor</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 flex flex-col gap-1">
                        <label htmlFor="name">Name:</label>
                        <input ref={nameRef} type="text" id='name' placeholder='Introduceti numele' className='border p-1' />
                    </div>
                    <div className="mb-3 flex flex-col gap-1">
                        <label htmlFor="email">Email:</label>
                        <input ref={emailRef} type="email" id='email' placeholder='Introduceti email-ul' className='border p-1' />
                    </div>
                    <div className="mb-3 flex flex-col gap-1">
                        <label htmlFor="age">Age:</label>
                        <input ref={ageRef} type="number" id='age' placeholder='Introduceti varsta' className='border p-1' />
                    </div>
                    <button
                        type="submit"
                        className='bg-gray-700 py-1 px-4 text-white hover:bg-gray-500'
                    >Save</button>
                </form>
            </div>
            <div className='p-5'>
                <h2 className='text-lg font-bold mb-4'>Lista angajatilor</h2>
                {loading && (
                    <div className="flex items-center align-middle bg-gray-800 text-white h-52">
                        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
                        Processing...
                    </div>
                )}
                {
                    !loading &&
                        employees.length > 0 ? (
                        <ul className='grid grid-cols-4 gap-3'>
                            {employees.map(data => (
                                <li key={data.id}
                                    className='p-2 border mb-1'
                                >
                                    <b>Name:</b> {data.name} <br />
                                    <b>Email:</b> {data.email} <br />
                                    <b>Age:</b> {data.age}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nu avem angajati</p>
                    )
                }
            </div>
        </div>
    )
}

export default Form
