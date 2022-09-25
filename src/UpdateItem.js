import React from 'react'
import "./UpdatedItem.css";

function UpdateItem() {
    let name='';
    const handleSubmit = () => {

    }

  return (
    <div className='container'>
        <input type="text" id="itemName" name="itemName" placeholder="Item Name here..." className='inputs' onChange={name=event.target.value}></input>
        <input type="text" id="itemName" name="itemName" placeholder="Item Quantity here..." className='inputs' onChange={this.handleChange}></input>
        <input type="text" id="itemName" name="itemName" placeholder="Item Image link here..." className='inputs' onChange={this.handleChange}></input>
        <input type="text" id="itemName" name="itemName" placeholder="Item Price here..." className='inputs' onChange={this.handleChange}></input>
        <button onClick={() => {
            handleSubmit
        }}>Submit</button>
    </div>
  )
}

export default UpdateItem;
