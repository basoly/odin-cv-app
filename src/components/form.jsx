// form that appears when adding new entry to section
// import NewEdu from './NewEdu'
// import NewExp from './NewExp'
// import NewInfo from './NewInfo'


const Form = ({content}) => {

    if (content == 'education') {
        return (
            <form className='card' id='text'>
                  <label htmlFor="institution">Institution:</label><br />
                  <input type="text" id="institution" name="institution"></input><br />

                  <label htmlFor="degree">Degree:</label><br />
                  <input type="text" id="degree" name="degree"></input>
                  
                  <label htmlFor="location">Location:</label><br />
                  <input type="text" id="location" name="location"></input>
                  
                  <label htmlFor="date">Date:</label><br />
                  <input type="text" id="date" name="date"></input>

                  <button type="button" className="submit-btn">Submit</button>


            </form>
        )
    } else if (content == 'experience') {
        return (
            <form className='card' id='text'>

                  <label htmlFor="role">Role: </label><br />
                  <input type="text" id="role" name="role"> </input><br />

                  <label htmlFor="company">Company: </label><br />
                  <input type="text" id="company" name="company"></input>

                  <label htmlFor="location">Location: </label><br />
                  <input type="text" id="location" name="location"></input>

                  <label htmlFor="start">Start: </label><br />
                  <input type="text" id="start" name="start"></input>

                  <label htmlFor="">End: </label><br />
                  <input type="text" id="end" name="end"></input>

                  <button type="button" className="submit-btn">Submit</button>
            </form>
            )
        
    }

};

export default Form