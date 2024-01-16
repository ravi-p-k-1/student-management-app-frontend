import axios from 'axios'

const baseURL = "http://localhost:4000";

export const ViewStudentServiceAPI=async()=>{
    return await axios.get(`${baseURL}/api/v1/students`);
}


