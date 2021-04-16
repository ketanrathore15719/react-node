// import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import '../App.css';
import axios from 'axios'

function Student() {

    const [ studentList, setStudentList ] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/student").then((response)=>{
            console.log(response)
            setStudentList(response.data)
        })
    },[])

    return (
        <div className="Student">
            <h1> Student Data </h1>
            <table>
                <tr>
                    <th>Roll Number</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>DOB</th>
                    <th>Mobile</th>
                    <th>City</th>
                </tr>
                {studentList.map((val,key) => {
                    return(
                    <tr>
                        <td>{val.roll_number}</td>
                        <td>{val.name}</td>
                        <td>{val.class}</td>
                        <td>{val.dob}</td>
                        <td>{val.mobile}</td>
                        <td>{val.city}</td>
                    </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default Student;
