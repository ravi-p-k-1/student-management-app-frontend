import React, { useState } from "react";
import { CreateDataInterface } from "../Interfaces/CreateDataInterface";

export const Create = () => {
  const [createDataObject, setCreateDataObject] = useState<CreateDataInterface>(
    {
      id: undefined,
      name: "",
      email: "",
      age: undefined,
      dob: "",
    }
  );
  const [isValid, setIsValid] = useState(false);

  const changeCreateDataaObject = (key: string, value: string | number) => {
    setCreateDataObject({ ...createDataObject, [key]: value });
  };

  const formValidation = () => {};

  const formSubmit = () => {
    formValidation();

    var temp = localStorage.getItem("studentData");

    var data: CreateDataInterface[] = JSON.parse(temp ? temp : "");

    data = [
      ...data,
      {
        id:createDataObject.id,
        name: createDataObject.name,
        email: createDataObject.email,
        age: createDataObject.age,
        dob: createDataObject.dob,
      },
    ];

    localStorage.setItem("studentData", JSON.stringify(data));
  };

  return (
    <div className="create">
      <form onSubmit={formSubmit}>
        <div>
          <input
            id="name"
            type="text"
            placeholder="Enter Name"
            value={createDataObject.name}
            onChange={(e) => {
              changeCreateDataaObject(e.target.name, e.target.value);
            }}
          />
          <input
            id="email"
            type="text"
            placeholder="Enter Email"
            value={createDataObject.email}
            onChange={(e) => {
              changeCreateDataaObject(e.target.name, e.target.value);
            }}
          />
          <input
            id="age"
            type="number"
            placeholder="Enter Age"
            value={createDataObject.age}
            onChange={(e) => {
              changeCreateDataaObject(e.target.name, e.target.value);
            }}
          />
          <input
            id="dob"
            type="text"
            placeholder="Enter DOB"
            value={createDataObject.dob}
            onChange={(e) => {
              changeCreateDataaObject(e.target.name, e.target.value);
            }}
          />
        </div>
        <button className="btn-primary" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};
