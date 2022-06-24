import React, { useState } from 'react'
const FormInput = () => {
  const [userSubmit, setUserSubmit] = useState({ firstname: '', lastname: '', gender: '' });
  const [record, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserSubmit({ ...userSubmit, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userSubmit, id: new Date().getTime().toString() }
    setRecords([...record, newRecord]);
    setUserSubmit({ firstname: "", lastname: '', gender: '' });
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">FirstName</label>
          <input type="text" name="firstname" id="firstname" value={userSubmit.firstname} onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="lastname">LastName</label>
          <input type="text" name="lastname" id="lastname" value={userSubmit.lastname} onChange={handleInput} />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" value={userSubmit.gender} onChange={handleInput}>
            <option value="Mr.">Male</option>
            <option value="Mrs.">Female</option>
          </select>

        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {
          setRecords.map((item) => {
            return (
              <div>
                <p>{item.firstname}</p>
                <p>{item.lastname}</p>
                <p>{item.gender}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default FormInput