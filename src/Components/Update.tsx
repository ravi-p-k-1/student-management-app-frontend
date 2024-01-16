import React, { useState } from 'react'
import { CreateDataInterface } from '../Interfaces/CreateDataInterface';
import { UpdateDataInterface } from '../Interfaces/UpdateDataInterface';

export const Update = () => {

  const [updateDataObject, setUpdateDataObject] = useState<UpdateDataInterface>(
    {
      id: undefined,
      name: "",
      email: "",
      age: undefined,
      dob: "",
    }
  );

  const [isValid, setIsValid] = useState(false);
  
  const changeUpdateDataaObject = (key: string, value: string | number) => {
    setUpdateDataObject({ ...updateDataObject, [key]: value });
  };

  const formValidation = () => {};

  const formSubmit = () => {

    formValidation();

    var temp = localStorage.getItem("studentData");

    var data: CreateDataInterface[] = JSON.parse(temp ? temp : "");

    data = [
      ...data,
      {
        id: updateDataObject.id,
        name: updateDataObject.name,
        email: updateDataObject.email,
        age: updateDataObject.age,
        dob: updateDataObject.dob,
      },
    ];

    localStorage.setItem("studentData", JSON.stringify(data));
  };
  

  return (
    <div className='update'>
    <form onSubmit={formSubmit}>
      <div>
        <input
          id="studentID"
          type="number"
          placeholder="Enter ID"
          value={updateDataObject.id}
          onChange={(e) => {changeUpdateDataaObject(e.target.name,e.target.value)}}
        />
        <input
          id="name"
          type="text"
          placeholder="Enter Name"
          value={updateDataObject.name}
          onChange={(e) => {changeUpdateDataaObject(e.target.name,e.target.value)}}
        />
        <input
          id="email"
          type="text"
          placeholder="Enter Email"
          value={updateDataObject.email}
          onChange={(e) => {changeUpdateDataaObject(e.target.name,e.target.value)}}
        />
        <input
          id="age"
          type="number"
          placeholder="Enter Age"
          value={updateDataObject.age}
          onChange={(e) => {changeUpdateDataaObject(e.target.name,e.target.value)}}
        />
        <input
          id="dob"
          type="text"
          placeholder="Enter DOB"
          value={updateDataObject.dob}
          onChange={(e) => {changeUpdateDataaObject(e.target.name,e.target.value)}}
        />
      </div>
      <button className="btn-primary" type="submit">
        Update
      </button>
    </form>
        
    </div>
  )
}
