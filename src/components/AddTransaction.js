import React from 'react'

const AddTransaction = () => {
  return (
    <>
        <h3>Add new Transaction</h3>
        <form>
            <div class="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder="Enter text..." />
            </div> 
            <div className='form-control'>
                <label htmlFor="amount">Amount <br/>
                (negative - expense, positive - income)</label>
                <input type='number' placeholder='Enter the Amount ...'></input>
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction
