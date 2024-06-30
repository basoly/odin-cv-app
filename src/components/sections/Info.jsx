import Add from '../buttons/Add.jsx'
import Edit from '../buttons/Edit.jsx'
// general info like name, email, phone
// 


function Info() {
    return (
    <section className='card'>
        <section className='btn-container'>
        <Add />
        <Edit />
        </section>
        <section className='content' id='info-content'>
            Name: First Last<br />Phone: 123-456-7890<br />Email: first.last@gmail.com
        </section>
        
        
    </section>
);
}

export default Info