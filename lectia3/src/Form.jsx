import React, { useState } from 'react';

const Form = () => {
    const [nume, setNume] = useState('');
    const handleChange = (e) => {
        setNume(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nume);
        alert(nume);
        setNume('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nume:
                <input
                    type="text"
                    value={nume}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Trimite</button>
        </form>
    );
}

export default Form
