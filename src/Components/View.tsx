import React, { useEffect, useState } from 'react'
import { ViewTableDataInterface } from '../Interfaces/ViewTableDataInterface';
import { ViewStudentServiceAPI } from '../Services';

export const View = () => {

    const [tableData, setTableData] = useState< ViewTableDataInterface[] | [] >([]);

    useEffect(() => {
      const fetchData=async()=>{
        const temp = await ViewStudentServiceAPI();
        setTableData(temp.data);
        localStorage.setItem("studentData", JSON.stringify(temp.data));
      }

      var data = localStorage.getItem("studentData");

      if(data===null){
        fetchData();
      } else{
        setTableData(JSON.parse(data));
      }
    }, []);

  return (
    <div className='view'>
        <table id='viewtable'>
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
                {
                    tableData.map((data, index)=>{
                        return <tr key={index}>
                            <td>
                                {data.id}
                            </td>
                            <td>
                                {data.name}
                            </td>
                            <td>
                                {data.email}
                            </td>
                            <td>
                                {data.age}
                            </td>
                            <td>
                                {data.dob}
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
