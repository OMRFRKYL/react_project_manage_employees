import { useState } from "react";
import Employee from "./Employee";


const EmployeeList = () => {

    
const [employees, setEmployees] = useState([
    {id:1,name:"Ömer Faruk",email:"faruk@gmail.com",address:"50.cd,no:5,Türkiye",phone:"(335568752)"},
    {id:2,name:"Mert",email:"mert@gmail.com",address:"55.cd,no:55,Türkiye",phone:"(335568810)"},
    {id:3,name:"Johnson",email:"john@gmail.com",address:"Chicago,USA",phone:"(958752622)"},
    {id:4,name:"Kevin",email:"kevin@gmail.com",address:"Manchester,England",phone:"(3522278966)"},
    {id:5,name:"Lionel",email:"lionel@gmail.com",address:"Paris,France",phone:"(123321456)"},
])
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <Employee employees={employees} />
      </tbody>
    </table>
  );
};

export default EmployeeList;
