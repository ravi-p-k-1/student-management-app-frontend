import React, { useEffect, useState } from "react";
import { ViewTableDataInterface } from "../Interfaces/ViewTableDataInterface";
import { ViewStudentServiceAPI } from "../Services";
import { AxiosResponse } from "axios";
import { ToastContainer, toast } from "react-toastify";

export const View = () => {
  const [tableData, setTableData] = useState<ViewTableDataInterface[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp:AxiosResponse = await ViewStudentServiceAPI();
      if (resp && resp.data) {
        setTableData(resp.data);
        localStorage.setItem("studentData", JSON.stringify(resp.data));
        toast.success("Data Fetched Succesfully", {
            position: "top-right",
        });
      }
    };

    var data = localStorage.getItem("studentData");

    if (data === null) {
      fetchData();
    } else {
      setTableData(JSON.parse(data));
    }
  }, []);

  return (
    <div className="view">
      <table id="viewtable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length>0 ? tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
                <td>{data.dob}</td>
              </tr>
            );
          }): <tr><td colSpan={5}>No data to show</td></tr>}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};
