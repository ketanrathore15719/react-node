import React, {PureComponent} from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class CreateStudent extends PureComponent {

   constructor(props)
   {
        super(props);

        this.state = {
            fields: {},
            errors: {},
            redirect:null
        }

    }

    handleValidation()
    {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Name field can not be empty";
        }


        if(!fields["rollnumber"]){
           formIsValid = false;
           errors["rollnumber"] = "Roll number field can not be empty";
        }

        if(!fields["stdclass"]){
           formIsValid = false;
           errors["stdclass"] = "Class field can not be empty";
        }


        if(!fields["dob"]){
           formIsValid = false;
           errors["dob"] = "Date of birth field can not be empty";
        }


        if(!fields["mobile"]){
           formIsValid = false;
           errors["mobile"] = "Mobile field can not be empty";
        }


        if(!fields["city"]){
           formIsValid = false;
           errors["city"] = "City field can not be empty";
        }

        if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z ]+$/)){
                formIsValid = false;
                errors["name"] = "Only letters";
            }        
        }
        if(typeof fields["stdclass"] !== "undefined"){
            if(!fields["stdclass"].match(/^[a-zA-Z-0-9]+$/)){
                formIsValid = false;
                errors["stdclass"] = "Somthing wenr wrong";
            }        
        }
        if(typeof fields["city"] !== "undefined"){
            if(!fields["city"].match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["city"] = "Only letters";
            }        
        }
        if(typeof fields["rollnumber"] !== "undefined"){
            if(!fields["rollnumber"].match(/^[0-9]+$/)){
                formIsValid = false;
                errors["rollnumber"] = "Only digits";
            }        
        }
        if(typeof fields["mobile"] !== "undefined"){
            if(!fields["mobile"].match(/^[0-9]+$/)){
                formIsValid = false;
                errors["mobile"] = "Only digits";
            }        
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    contactSubmit (e) 
    {
        e.preventDefault();
        const rollnumber = this.state.fields.rollnumber
        const name = this.state.fields.name
        const stdclass = this.state.fields.stdclass
        const dob = this.state.fields.dob
        const mobile = this.state.fields.mobile
        const city = this.state.fields.city
        if(this.handleValidation()) {
            axios.post("http://localhost:5000/student/create", {
                rollnumber:rollnumber,
                name:name,
                stdclass:stdclass,
                dob:dob,
                mobile:mobile,
                city:city
            }).then((response)=>{
                alert('Student created successfully')	
                this.setState({redirect:true})
            }).catch((err) => {
                alert(err)
            });
        } else {
               alert("Form has errors.")
           }

    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    render() 
    {

        if (this.state.redirect) {
            return <Redirect to="/student/view" />
        }

        return (
            <div>
                <h1> Add student </h1>
                <form name="contactform" id="myform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                    <div className="col-md-6">
                        <fieldset>
                            <input ref="rollnumber" type="text" size="30" placeholder="Roll Number" onChange={this.handleChange.bind(this, "rollnumber")} value={this.state.fields["rollnumber"]}/>
                            <br/>
                            <span style={{color: "red"}}>{this.state.errors["rollnumber"]}</span>
                            <br/>

                            <input ref="name" type="text" size="50" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                            <br/>
                            <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                            <br/>

                            <input ref="stdclass" type="text" size="30" placeholder="Class" onChange={this.handleChange.bind(this, "stdclass")} value={this.state.fields["stdclass"]}/>
                            <br/>
                            <span style={{color: "red"}}>{this.state.errors["stdclass"]}</span>
                            <br/>

                            <input ref="dob" type="date" size="30" placeholder="Date of birth" onChange={this.handleChange.bind(this, "dob")} value={this.state.fields["dob"]}/>
                            <br/>
                            <span style={{color: "red"}}>{this.state.errors["dob"]}</span>
                            <br/>

                            <input ref="mobile" type="text" size="30" placeholder="Mobile number" onChange={this.handleChange.bind(this, "mobile")} value={this.state.fields["mobile"]}/>
                            <br/>
                            <span style={{color: "red"}}>{this.state.errors["mobile"]}</span>
                            <br/>

                            <input ref="city" type="text" size="30" placeholder="City" onChange={this.handleChange.bind(this, "city")} value={this.state.fields["city"]}/>
                            <br/>
                            <span style={{color: "red"}}>{this.state.errors["city"]}</span>
                            <br/>

                            <input type="submit" />
                        </fieldset>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateStudent;