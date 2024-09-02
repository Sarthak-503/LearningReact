import React, { useState } from 'react'

const NewTask = ({addTask}) => {
  const [enteredTask,setEnteredTask] = useState('');
  function handleChange(e) {
    
    setEnteredTask(e.target.value);
  }
  function handleClick() {
    if(enteredTask.trim() ==='') {
      return;
    }
    setEnteredTask('');
    addTask(enteredTask)
  }
  return (
    <div className='flex item-center gap-4 mb-2'>
      <input type="text" className='w-64 py-1 px-2 rounded-sm bg-stone-200'
      onChange={handleChange} 
      value={enteredTask} />
      <button className='text-stone-700 hover:text-stone-950' onClick={handleClick}>Add Task</button>

    </div>
  )
}

export default NewTask;
