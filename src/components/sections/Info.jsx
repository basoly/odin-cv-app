import Add from '../buttons/Add.jsx'
import Edit from '../buttons/Edit.jsx'
// general info like name, email, phone
// 


function Info() {
    let infoData = {
        first : 'firstName',
        last : 'LastName',
        phone : '123456789',
        email: 'first.last@gmail.com'
    };

    return (
    <section className='card'>
        <section className='btn-container'>
        <Add />
        <Edit />
        </section>
        <section className='content' id='info-content'>
            {infoData.first + ' ' + infoData.last}<br />{infoData.phone}<br />{infoData.email}
        </section>
        
        
    </section>
);
}

export default Info