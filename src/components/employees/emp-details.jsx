import React from 'react'

function EmpDetails (props){
    return (
        <div className="ui card">
        <div className="content">
        <div className="header">

        
        <h3>
            Emp Datails of id: {props.employee.id}
        </h3>
        </div>
        <div className="description">
        <p><strong>Emp id:</strong>{props.employee.id}</p>
        <p><strong>EmpNo:</strong>{props.employee.empNo}</p>
        <p><strong>First Name:</strong>{props.employee.firstName}</p>
        <p><strong>Last Name:</strong>{props.employee.lastName}</p>
        <p><strong>city:</strong>{props.employee.city}</p>
        </div>
        </div>
        </div>
    )

}
export default EmpDetails;