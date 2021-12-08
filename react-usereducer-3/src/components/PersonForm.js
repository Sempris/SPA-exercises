import React, { useContext, useState } from 'react';
import FormContext from '../context/FormContext';

function PersonForm() {
    const [send , setSend] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const {submitData} = useContext(FormContext);

    const submitHandler = e => {
        e.preventDefault();
        submitData(send);
    }

    const changeHandler = (e) => {
        setSend({...send, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Your Name:</label>
                    <input type="text" name="name" value={send.name} onChange = {changeHandler}/>
                </div>
                <div>
                    <label>Your Email:</label>
                    <input type="email" name="email" value={send.email} onChange = {changeHandler}/>
                </div>
                <div>
                    <label>Your Phone:</label>
                    <input type="text" name="phone" value={send.phone} onChange = {changeHandler}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm
