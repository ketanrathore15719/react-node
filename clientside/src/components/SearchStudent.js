import React, {Component} from 'react';
import {Table} from 'react-bootstrap'

class SearchStudent extends Component {
	constructor() 
	{
		super()
		this.state={
			searchData:null,
			noData:false
		}
	}
	search(key)
	{
		console.warn(key)
		fetch("http://localhost:5000/student/search/"+key).then((data)=>{
			data.json().then((resp)=>{
				console.warn("result",resp)
				if (resp.length > 0) {
					this.setState({searchData:resp,noData:false})
				} else {
					this.setState({noData:true,searchData:null})
				}
				
			})
		})
	}
	render() {
		return (
			<div>
				<br/>
				<h1> Search Student </h1>
				<br/>
				<input type="text" onChange={(event)=>this.search(event.target.value)} />
				<br/>
				<br/>
				<div>
					{
						this.state.searchData?
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
                        </tr>
                        </thead>
                        <tbody>
						{
							this.state.searchData.map((val, i)=>
							<tr>
                                <td>{i}</td>
                                <td>{val.roll_number}</td>
                                <td>{val.name}</td>
                                <td>{val.class}</td>
                                <td>{val.dob}</td>
                                <td>{val.mobile}</td>
                                <td>{val.city}</td>
                            </tr>)
						}
						</tbody>
                        </Table>
						</div>
						:<p></p>
					}
					{
						this.state.noData?<h3>No Data Found</h3>:null
					}
				</div>
			</div>
		);
	}
}

export default SearchStudent;