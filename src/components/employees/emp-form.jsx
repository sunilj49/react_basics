import React, { Component } from 'react';
 import PropTypes from 'prop-types';

export class EmpForm extends Component{

    constructor(props){
        super(props);
        this.state={
            empNo:'',
            firstName:'',
            lastName:'',
            city:''
        }
    }
    handleChange=(evt)=>{
        this.setState ({
            [evt.target.name]:evt.target.value
     
        })
     }

     resetForm=()=>{
         this.setState({
            empNo:'',
            firstName:'',
            lastName:'',
            city:''
         })
     }



     handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(this.state)
        this.props.addEmployee(this.state);
        this.resetForm();
    }



    render() {

        
        return (
            <form onSubmit={ this.handleSubmit } className="ui form">
            <label>Emp no.</label>
            <input type="Text" 
                name="empNo"
               value={this.state.empNo}
               onChange={this.handleChange} />
            <br/>

            <label>First name</label>
            <input type="Text"
                name="firstName" 
               value={this.state.firstName}
               onChange={this.handleChange} />
            <br/>

            <label>Last Name</label>
            <input type="Text" 
                name="lastName"
               value={this.state.lastName}
               onChange={this.handleChange} />
            <br/>

            <label>city</label>
            <input type="Text" 
                name="city"
               value={this.state.city}
               onChange={this.handleChange} />
            <button>Add Employee</button>
            </form>
           
           
        );
    }
}

EmpForm.propTypes= {
    addEmployee:PropTypes.func.isRequired
}