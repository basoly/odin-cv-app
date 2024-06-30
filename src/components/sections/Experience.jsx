import Add from '../buttons/Add.jsx'
import Edit from '../buttons/Edit.jsx'

function Experience() {
    return (
        <section className='card'>
        <section className='btn-container'>
        <Add />
        <Edit />
        </section>
        <section className='content' id='info-content'>
            Workplace Name<br />Job Role Name<br />City, Country
        </section>
        
        
    </section>
);
}

export default Experience