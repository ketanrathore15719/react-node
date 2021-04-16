// import logo from './logo.svg';
import React, {useState} from "react";
import '../App.css';
import axios from 'axios'


function App() {

    const [ rollnumber, setRollnumber ] = useState("");
    const [ name, setName ] = useState("");
    const [ stdclass, setClass ] = useState("");
    const [ dob, setDOB ] = useState("");
    const [ mobile, setMobile ] = useState("");
    const [ city, setCity ] = useState("");

    const addtolist = () => {
        axios.post("http://localhost:5000/student/create", {
            rollnumber:rollnumber,
            name:name,
            stdclass:stdclass,
            dob:dob,
            mobile:mobile,
            city:city
        }).then((response)=> {
            if (response) {
                window.location.reload(false);
            }
        });
    }

    return (
        <div className="App Create">
            <h1>Add Student</h1>
            <label>Roll Number</label>

            <input type="text" onChange={(event) => {
            setRollnumber(event.target.value)
            }} />
            <label>Name</label>
            <input type="text" onChange={(event) => {
            setName(event.target.value)
            }} />
            <label>Class</label>
            <input type="text" onChange={(event) => {
            setClass(event.target.value)
            }} />
            <label>DOB</label>
            <input type="text" onChange={(event) => {
            setDOB(event.target.value)
            }} />
            <label>Mobile</label>
            <input type="text" onChange={(event) => {
            setMobile(event.target.value)
            }} />
            <label>City</label>
            <input type="text" onChange={(event) => {
            setCity(event.target.value)
            }} />
            <br></br>
            <button onClick={addtolist}>Submit</button>
        </div>
    );
}

export default App;
