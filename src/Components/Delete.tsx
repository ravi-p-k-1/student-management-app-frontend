import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Delete = () => {

  const [studentID, setStudentID] = useState<number | undefined>();

  const deleteStudent=(id: number)=>{

  }

  return (
    <div className='delete'>
        <input
          id="studentID"
          type="number"
          placeholder="Enter ID"
          value={studentID}
          onChange={(e) => {setStudentID(e.target.valueAsNumber)}}
        />
        <button className='btn-primary' type='button' onClick={(e)=>{studentID?deleteStudent(studentID) : toast.error("Please enter a ID!", {position: 'top-right'});}}>Delete</button>
        <ToastContainer />
    </div>
  )
}
