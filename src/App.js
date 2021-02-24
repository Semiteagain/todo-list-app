
import React, {useState} from 'react';

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
    <div className="App">
      Add item ... 
      <br />

      <input
        type='text'
        placeholder = 'Add new Item here'
        value={addText}
        onChange = {handleChange}
      />

      <button onClick={addItem}>Add Items</button>

      <div>
        <ul>
              {items.map((newItem) =>{
                return <li>{newItem}</li>
              })}
        </ul>
      </div>
    </div>

  );
}

export default App;
