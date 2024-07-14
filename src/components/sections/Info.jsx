import { useState } from 'react';

export default function Info() {
    const [data, setData] = useState({
        first: 'First Name',
        last: 'Last Name',
        phone: '123-456-7890',
        email: 'test@email.com'
    });
    const [mode, setMode] = useState('read');

    const handleEdit = (e) => {
        e.preventDefault();
        setMode('edit');      
    }

    const handleSave = (e) => {
        e.preventDefault();
        let first = document.querySelector('#first').value; // first name input field value
        let last = document.querySelector('#last').value // last name input field value
        let phone = document.querySelector('#phone').value;
        let email = document.querySelector('#email').value;
        setData({
            first: first,
            last: last,
            phone: phone,
            email: email
         });
         setMode('read')

    }




    return (

        <section className='card'>

            {(mode == 'read') ?  <>
            <section className='btn-container'><button onClick={handleEdit}>Edit</button></section>
            <section className='content'>
                {data.first + ' ' + data.last}<br />{data.phone}<br />{data.email}
            </section>
            </> : null}

            {(mode == 'edit') ? <>
           
            <section className='btn-container'><button onClick={handleSave}>Save</button></section>
            <section className='content'>
                <div>Mode:Edit</div><br/>
                <label>First Name: <input id='first' defaultValue={data.first}></input></label>
                <label>Last Name: <input id='last' defaultValue={data.last}></input></label>
                <label>Phone: <input id='phone' defaultValue={data.phone}></input></label>
                <label>Email: <input id='email' defaultValue={data.email}></input></label>
            </section>
            </> : null}

        </section>
    )

}

