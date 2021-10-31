import { useEffect, useState } from 'react';
import './../App.css';
import phProfile from './../images/blank-profile-picture.png'

function Employees() {

  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);
  const [currentIndex, setIndex] = useState(null);
  const [currentError, setError] = useState(false);

  const fetchItems = async () => {
    try {
      const data = await fetch('http://localhost:8081/employees', {
        timeout: 6000
      });
      const items = await data.json();
    
      setItems(JSON.parse(items).employees);
      console.log(items);
      console.log(JSON.parse(items).employees);
      setError(false)
    } catch (error) {
      console.log("Could not fetch items");
      setError(true)
    }
  }

  function listClick(id) {
    console.log("CLICK", id)
    setIndex(id)
    console.log(currentIndex)
  }

  const DisplayData = items.map(
    (item, i) => {
      return(
        <tr id={i}>
          <td onClick={() => listClick(i)}>{item.name}</td>
          <td>{item.dep_no}</td>
          <td>{item.gender}</td>
        </tr>
      )
    }
  )

  function wrapperFunc() {
    setError(false);
    fetchItems()
  }

  const ErrorBlock = () => {
    if(currentError !== false) {
      return(
        <div className="ErrorBlock">
          <h3>Could not fetch items...</h3>
          <button onClick={() => wrapperFunc()}>Retry</button>
        </div>
      )
    }
    return null;
  }

  const EmployeeForm = () => {
    if(currentIndex != null) {
      return(
        <form>
          <label>
            Name:
            <input type="text" name="name" placeholder={items[currentIndex].name} />
          </label>
          <label>
            Department:
            <input type="text" name="name" placeholder={items[currentIndex].dep_no} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
    return null;
  }

  function closeClick(id) {
    setIndex(null)
  }

  const EmployeeCard = () => {
    if(currentIndex != null) {
      return(
        <div>
          <div className="EmployeeCard">
            <div>
              <h2>Name: {items[currentIndex].name}</h2>
              <h2>Department: {items[currentIndex].dep_no}</h2>
              <h2>Gender: {items[currentIndex].gender}</h2>
              <h2>Salary: {items[currentIndex].salary}</h2>
              <h2>Title(s): </h2>
            </div>
            <img src={phProfile} alt="ProfilePicture" style={{width:200, height:200}}></img>
          </div>
          <button onClick={() => closeClick()}>Close</button>
        </div>
      )
    }
    return null;
  }
    
  return (
    <div>
        <h1>Employees Page</h1>
          {ErrorBlock()}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {DisplayData}
            </tbody>
          </table>
          <div>
            {EmployeeCard()}
          </div>
    </div>
  );
}

export default Employees;