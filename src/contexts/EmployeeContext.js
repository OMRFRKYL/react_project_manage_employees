import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //bu paket sayesinde "unıque ıd" üretimi yapabiliriz.

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees,setEmployees] = useState([
    {
      id: uuidv4(),
      name: "Ömer Faruk",
      email: "faruk@gmail.com",
      address: "50.cd,no:5,Türkiye",
      phone: "(335568752)",
    },
    {
      id: uuidv4(),
      name: "Mert",
      email: "mert@gmail.com",
      address: "55.cd,no:55,Türkiye",
      phone: "(335568810)",
    },
    {
      id: uuidv4(),
      name: "Johnson",
      email: "john@gmail.com",
      address: "Chicago,USA",
      phone: "(958752622)",
    },
    {
      id: uuidv4(),
      name: "Kevin",
      email: "kevin@gmail.com",
      address: "Manchester,England",
      phone: "(3522278966)",
    },
    {
      id: uuidv4(),
      name: "Lionel",
      email: "lionel@gmail.com",
      address: "Paris,France",
      phone: "(123321456)",
    },
  ]);


  //!Daha sonra objelerimizi getItem ile çağırdık.Ve statemizi obje formatında güncellemiş olduk.
  useEffect(() => {
    const employees=localStorage.getItem("employees")
    setEmployees(JSON.parse(employees))
  }, [])

  //!Öncelikle elimizdeki objeleri setItem ile string olarak storage'e gömdük.
  useEffect(() => {
   localStorage.setItem("employees",JSON.stringify(employees))
  })

  
  

  const sortedEmployess = employees.sort((a,b)=>a.name<b.name ? -1 : 1)

  const addEmployee =(name,email,address,phone)=>{
    setEmployees([...employees,{id:uuidv4(),name,email,address,phone}])
  }

  const deleteEmployee =(id)=>{
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  const updateEmployee = (id,updatedEmployee)=>{
    setEmployees(employees.map((employee)=>(employee.id ===id ? updatedEmployee:employee)))
  }

  return (
    <EmployeeContext.Provider value={{ sortedEmployess,addEmployee,deleteEmployee, updateEmployee}}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
