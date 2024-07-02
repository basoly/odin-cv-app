import Add from '../buttons/Add.jsx'
import Edit from '../buttons/Edit.jsx'
import { expData } from '../../assets/expData.js'

function Experience() {
    
    return (

    <section className='card'>
        <section className='btn-container'>
            <Add />
            <Edit />
        </section>
        <section className='content' id='info-content'>
            <ul>{expData.map((entry) => {
                    let text = <li key={entry.role}>{entry.role}, {entry.company}, {entry.location}, {entry.start} - {entry.end}</li>

                    return text
                        
                    
                })}
            </ul>
        </section>
        
        
    </section>
);
}

export default Experience