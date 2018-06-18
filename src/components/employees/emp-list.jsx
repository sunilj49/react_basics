import React, { Component } from 'react';
import EmpDetails from './emp-details'; 
import { EmpForm } from './emp-form';
//import Prop  from 'pr'

class EmpList extends Component{

    constructor(props) {
        super(props);
        this.state ={
         
        employees:[
            {
                id:1,
                empNo:'abc123',
                firstName:'sunil',
                lastName:'j',
                city:'gadag'
            },
            {
                id:2,
                empNo:'abc124',
                firstName:'sachin',
                lastName:'h',
                city:'bangalore'
            },
            {
                id:3,
                empNo:'abc125',
                firstName:'basu',
                lastName:'ff',
                city:'koppal'
            }
        ],
        latestId:4,
        selectedEmployee:null
    }
}
   
    
        showDetails=(selectedEmployee)=>{
        console.log(selectedEmployee);
        this.setState({
            selectedEmployee:selectedEmployee
        })
    }

    addEmployee =(empObj) => {
        //newEmployee.id=this.state.latestId;
        let newEmployee=Object.assign({},empObj,{id:this.state.latestId});
        

    let newList = [...this.state.employees,newEmployee];
      this.setState({
          employees: newList,
          latestId:this.state.latestId +1
      });
   }



    render() {
    const empRows=this.state.employees.map(e=>{
        return(
            <tr>
                <td>{e.id}</td>
                <td>{e.empNo}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.city}</td>
                <td>
                    <button onClick={()=>this.showDetails(e)}>show details</button>
                </td>

            </tr>
        )
    })  
        return (
           <div>
               <h3>Emp List</h3>
               <table>
                   <thead>
                       <tr>
                       <th>id</th>
                       <th>empNo</th>
                       <th>firstName</th>
                       <th>lastName</th>
                       <th>city</th>
                       <th>Actions</th>

                       </tr>
                       </thead>
                    <tbody>
                        {
                         empRows   
                        }
                        
                            
                    </tbody>

               </table>
               <div class="ui divided two column grid">
                <div class="row">
                <div class="column">
                <EmpForm addEmployee={this.addEmployee}/>
                </div>
                <div class="column">
                {
                   this.state.selectedEmployee &&
             <EmpDetails employee={this.state.selectedEmployee}/>
               }
                </div>
                </div>
                </div>
               
               
         </div>
           
        );
    }
}

export default EmpList;