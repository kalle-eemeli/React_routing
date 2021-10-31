import { useEffect, useState } from 'react';
import './../App.css';

function Departments() {

  useEffect(() => {
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const data = await fetch('http://localhost:8081/departments', {
        timeout: 6000
      });
      const items = await data.json()
      console.log(items);
      setItems(items);
    } catch (error) {
      alert("Could not fetch items");
    }
    
  }

  return (
    <div>
        <h1>Departments Page</h1>
        <p>{items}</p>
    </div>
  );
}

export default Departments;