import React from 'react'

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <li class="minus">
            Cash <span>-$400</span><button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  )
}

export default TransactionList
