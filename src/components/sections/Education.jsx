import Add from '../buttons/Add.jsx'
import Edit from '../buttons/Edit.jsx'

function Education() {
    return (
        <section className='card'>
        <section className='btn-container'>
        <Add />
        <Edit />
        </section>
        <section className='content' id='info-content'>
            College University<br />Bachelor of Science<br />City, Country
        </section>
        
        
    </section>
);
}

export default Education