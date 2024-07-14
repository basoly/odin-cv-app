import { useState } from 'react';

export default function Experience() {
    const [data, setData] = useState([{
        key: 0,
        role: 'Test Role',
        company: 'Test Company',
        location: 'Test Location',
        start: 'Month Year',
        end: 'Month 2 Year 2'
    }]);
    const [mode, setMode] = useState('read');

    const handleEdit = (e) => {
        e.preventDefault();
        setMode('edit');
    }

    const handleSave = (e) => {
        e.preventDefault();
        if (mode == 'add') {
            let uuid = self.crypto.randomUUID();
            let newEntry = {
                key: uuid,
                role: document.querySelector('input#role').value,
                company: document.querySelector('input#company').value,
                location: document.querySelector('input#location').value,
                start: document.querySelector('input#start').value,
                end: document.querySelector('input#end').value,
            }
        setData([...data, newEntry]);
        setMode('read');
        }

        if (mode == 'edit') {
            let newData = [];
            let containers = document.querySelectorAll('div.entry-container');
            containers.forEach(container => {
                var key = container.querySelector('input#key').value;
                var role = container.querySelector('input#role').value;
                var company = container.querySelector('input#company').value;
                var location = container.querySelector('input#location').value;
                var start = container.querySelector('input#start').value;
                var end = container.querySelector('input#end').value;
            let edited = {
                key: key,
                role: role,
                company: company,
                location: location,
                start: start,
                end: end
            }
            newData = [...newData, edited]
            })
            setData(newData);
            setMode('read');

        }
    }

    const handleAdd = (e) => {
        e.preventDefault();
        setMode('add');
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setMode('read');
    }

    return (

        <section className='card'>

            {(mode == 'read') ?  <>
            <section className='btn-container'><button onClick={handleEdit}>Edit</button><button onClick={handleAdd}>Add</button></section>
            <section className='content'>
                <ul>
                    {data.map((entry) => {
                        let text = <li key={entry.role}>{entry.role}, {entry.company}, {entry.location}, {entry.start} - {entry.end}</li>
                        return text
                    })}
                </ul>
            </section>
            </> : null}

            {(mode == 'edit') ? <>
            <section className='btn-container'><button onClick={handleSave}>Save</button> <button onClick={handleCancel}>Cancel</button></section>
            <section className='content'>
                <div>Edit Mode</div>
                {data.map((entry) => {
                    let output = <>
                    <div className='entry-container'id={entry.key}>
                        <input type='text' id= 'key' value={entry.key}/>
                        <input type="text" id= 'role' defaultValue={entry.role} />
                        <input type="text" id= 'company' defaultValue={entry.company}/>
                        <input type="text" id= 'location' defaultValue={entry.location} />
                        <input type="text" id= 'start' defaultValue={entry.start} />
                        <input type="text" id= 'end' defaultValue={entry.end} />
                    </div></>
                    return output
                })}
            </section>
            </> : null}

            {(mode == 'add') ? <>
            <section className='btn-container'><button onClick={handleSave}>Save</button> <button onClick={handleCancel}>Cancel</button></section>
            <section className='form'>
                <label htmlFor="role">Job Role: <input id = 'role' placeholder='Enter Job Role'></input></label>
                <label htmlFor='company'>Company: <input id = 'company' type="text" placeholder='Enter Company'/></label>
                <label htmlFor='location'>Location: <input id='location' type="text" placeholder='Enter Location' /></label>
                <label htmlFor='start'>Date Start: <input id='start' type="date" placeholder='Enter Date Start'/></label>
                <label htmlFor='end'>Date end: <input id='end' type="date" placeholder='Enter Date End'/></label>
            </section>
            </> : null}

        </section>
    )

}
