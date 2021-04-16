// import logo from './logo.svg';
import React, {Component } from "react";
import '../App.css';
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import {
    Link
} from 'react-router-dom'
class Student extends Component {

    constructor()
    {
        super();
        this.state={
            list:null
        }
    }
    componentDidMount()
    {
        this.getData()
    }
    getData()
    {
        fetch("http://localhost:5000/student").then((response)=>{
        //console.log(response)
        response.json().then((result) => {
            this.setState({list:result})
        })
        //etStudentList(response.data)
        })
    }
    delete(id)
    {
        axios.delete("http://localhost:5000/student/delete/" + id).then((response)=>{
            alert('Student deleted successfully')  
            this.getData() 
        }).catch((err) => {
            alert(err)
        });
    }
    render() {
        
        return (
            <div className="Student">
                <h1> List of student data</h1>
                {
                    this.state.list?
                    <div>
                        <Table className="Table">
                        <thead>
                        <tr>
                            <th>##</th>
                            <th>Roll Number</th>
                            <th>Name</th>
                            <th>Class</th>
                            <th>DOB</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map((val, i)=>
                            
                            <tr>
                                <td>{i}</td>
                                <td>{val.roll_number}</td>
                                <td>{val.name}</td>
                                <td>{val.class}</td>
                                <td>{val.dob}</td>
                                <td>{val.mobile}</td>
                                <td>{val.city}</td>
                                <td><Link to={"/student/edit/"+val._id}><FontAwesomeIcon icon={faEdit} color="orange" /></Link>&nbsp;&nbsp;&nbsp;
                                <span onClick={()=>this.delete(val._id)}><FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                            </tr>)
                        }
                        </tbody>
                        </Table>
                    </div>
                    :<p>Not Found</p>
                }
            </div>
        );       
    }
    
}

export default Student;
