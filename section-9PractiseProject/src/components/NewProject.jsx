import Input from './Input.jsx';
import React, { useRef } from 'react'
import Modal from "./Modal.jsx";

const NewProject = ({onAdd,onCancel}) => {
  const modal = useRef();

  const title = useRef(null);
  const description= useRef(null);
  const dueDate = useRef(null);
  function handleSave() {
    
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate= dueDate.current.value;
    if(enteredDescription.trim() === '' || enteredDueDate.trim()===''  || enteredTitle===''){
      modal.current.open();
      return ;
    }
    onAdd({
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enteredDueDate
    })
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value.</p>
        <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input value.</p>

    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
            Cancel
          </button>
        </li>
        <li>
          <button onClick={handleSave}
           className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" textarea={false} />
        <Input ref={description} label="Description" textarea={true} />  
        <Input type="date" ref={dueDate} label="Due Date" textarea={false} />
      </div>
    </div>
    </>

  );
};

export default NewProject;
