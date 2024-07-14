import { useState } from 'react';

export default function Education() {
    const [mode, setMode] = useState('read');
    const [data, setData] = useState([{
        key : 0,
        institution : 'Test University',
        degree : 'Test Bachelor',
        location : 'Test Location',
        date : '1/2/3'
    
    }]);

    

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
                institution: document.querySelector('input#institution').value,
                degree: document.querySelector('input#degree').value,
                location: document.querySelector('input#location').value,
                date: document.querySelector('input#date').value,
            }
        setData([...data, newEntry]);
        setMode('read');
        }

        if (mode == 'edit') {
            let newData = [];
            let containers = document.querySelectorAll('div.entry-container');
            containers.forEach(container => {
                var key = container.querySelector('input#key').value;
                var institution = container.querySelector('input#institution').value;
                var degree = container.querySelector('input#degree').value;
                var location = container.querySelector('input#location').value;
                var date = container.querySelector('input#date').value;
            let edited = {
                key: key,
                institution: institution,
                degree: degree,
                location: location,
                date: date
            }
            newData = [...newData, edited]
            })
            setData(newData);
            setMode('read')

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
                {(data) ? <>

                {
                    data.map((entry) => {
                        let text = <li key={entry.key}>{entry.institution}, {entry.degree}, {entry.location}, {entry.date}</li>
                        return text
                    })
                } </> : null}
                
            </section>
            </> : null}

            {(mode == 'edit') ? <>
            <section className='btn-container'> <button onClick={handleSave}>Save</button> <button onClick={handleCancel}>Cancel</button> </section>
            <section className='content'>
                {data.map((entry) => {
                    let output = <>
                    <div className='entry-container'id={entry.key}>
                        <input type='text' id= 'key' value={entry.key}/>
                        <input type="text" id= 'institution' defaultValue={entry.institution} />
                        <input type="text" id= 'degree' defaultValue={entry.degree}/>
                        <input type="text" id= 'location' defaultValue={entry.location} />
                        <input type="text" id= 'date' defaultValue={entry.date} />
                    </div></>
                    return output
                })}
            </section>
            </> : null}

            {(mode == 'add') ? <>
            <section className='btn-container'><button onClick={handleSave}>Save</button> <button onClick={handleCancel}>Cancel</button></section>
            <section className='form'>
                <label htmlFor="institution">Institution: <input id='institution' placeholder='Enter Institution Name'></input></label>
                <label htmlFor='degree'>Degree: <input id='degree' type="text" placeholder='Enter Degree'/></label>
                <label htmlFor='location'>Location: <input id='location' type="text" placeholder='Enter Location' /></label>
                <label htmlFor='date'>Date Awarded<input id='date' type="date" placeholder='Enter Date Awarded'/></label>
            </section>
            </> : null}

        </section>
    )

}