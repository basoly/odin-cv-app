import Add from '../buttons/Add.jsx'
import Edit from '../buttons/Edit.jsx'
import { eduData } from '../../assets/expData.js'

function Education() {

    return (
    <section className='card'>
        <section className='btn-container'>
            <Add />
            <Edit />
        </section>
        <section className='content' id='info-content'>
            <ul>{eduData.map((entry) => {
                    let text = <li key={entry.institution}>{entry.institution}, {entry.degree}, {entry.location}, {entry.date}</li>

                    return text
                        
                    
                })}
            </ul>
        </section>
        
        
    </section>
);
}

export default Education