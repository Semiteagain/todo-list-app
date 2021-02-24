import React, { useState } from 'react'


function Practice(props) {
    const [testItem, settestItem] = useState('')

    const [listItem, setlistItem] = useState([])

    function handleTesting(event) {
        const newTestingValue = event.target.value;
        settestItem(newTestingValue)
    }

    function addTesting() {
        setlistItem((prevList) =>{
            return [
                ...prevList, testItem
            ]
        })
        settestItem('')
    }

    return (
        <>
            <div>
                <h1>Testing....</h1>

                <input 
                type='text'
                placeholder='Enter testing'
                value={testItem}
                onChange= {handleTesting}
                 />
                 
                 <div>
                     <ul>
                         {listItem.map((listTodo) =>{
                             return <li>{listTodo}</li>
                         })}
                     </ul>
                 </div>

                 <button onClick={addTesting}>Add testing</button>
            </div>
        </>
    )
}


export default Practice