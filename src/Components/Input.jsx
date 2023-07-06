import React from 'react'

function Input({ setPostId }) {

    function handleClick(e) {
        setPostId(e.target.previousSibling.value)
    }

  return (
    <div>
        <input type="text" placeholder='Enter post id'/>
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Input