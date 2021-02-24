
import React, {useState} from 'react';
import Practice from './components/Practice'

function App() {

   const [addText, setAddText] = useState('')
   const [items, setItems] = useState([])


   function handleChange(event) {
     const newValue = event.target.value
     setAddText(newValue)
   }
  
   function addItem() {
       setItems ((prevItems) =>{
         return [
           ...prevItems, addText
         ]
       });
     setAddText('')
   }

  return (
    <div className="main">
      <div className="container">
        <h3> Add item ... </h3>
     
      <br />

      <input className='list-event'
        type='text'
        placeholder = 'Add new Item here'
        value={addText}
        onChange = {handleChange}
      />

      <button onClick={addItem}>Add Items</button>

      <div>
        <ul className='list-event'>
              {items.map((newItem) =>{
                return <li>{newItem}</li>
              })}
        </ul>
      </div>
      </div>
       <Practice />
    </div>
      
  );
}

export default App;
