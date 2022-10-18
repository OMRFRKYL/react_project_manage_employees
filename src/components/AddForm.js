import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {

  const{addEmployee} = useContext(EmployeeContext);
  //! ********-----*******1.YOL BAŞLANGIÇ**********------********
  //! 11-19 satırlar arası herbir değer için ayrı bir func.tanımladık.Değerleri ayrı ayrı ele aldık.Bu programcılık
  //! açısından tam performanslı değil çünkü input alanımız 4ten fazlada oalbilirdi.Yorum satırları 1.yola aittir.
  //* const [name, setName] = useState("");
  //* const [email, setEmail] = useState("");
  //* const [address, setAddress] = useState("");
  //* const [phone, setPhone] = useState("");

  //* const handleSubmit = (e)=>{
  //*   e.preventDefault();
  //*   addEmployee(name,email,address,phone)
  //! ********-----*******1.YOL BİTİŞ**********------********
  
  //! ********-----*******2.YOL BAŞLANGIÇ**********------********
  const [newEmployee, setNewEmployee] = useState({
    name:"",email:"",address:"",phone:""
  })

  const {name,email,address,phone}=newEmployee;

  const onInputChange=(e)=>{
    setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    addEmployee(name,email,address,phone)
  }

  //! ********-----*******2.YOL BİTİŞ**********------********

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control type="text" placeholder="Name *" required value={name} name="name" onChange={e=>onInputChange(e)}/>
      </Form.Group>
      <Form.Group>
        <Form.Control type="email" placeholder="Email *" required value={email} name="email" onChange={e=>onInputChange(e)}/>
      </Form.Group>
      <Form.Group>
        <Form.Control as="textarea" placeholder="Address *" rows={3} value={address} name="address" onChange={e=>onInputChange(e)} />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Phone" value={phone} name="phone" onChange={e=>onInputChange(e)}/>
      </Form.Group>

      <Button variant="success" type="submit" >
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;


//? 1.yol için input özellikleri ve functionları alttadır.
//!<Form.Control type="text" placeholder="Name *" required value={name} onChange={e=>setName(e.target.value)}/>
//!<Form.Control type="email" placeholder="Email *" required value={email} onChange={e=>setEmail(e.target.value)}/>
//!<Form.Control as="textarea" placeholder="Address *" rows={3} value={address} onChange={e=>setAddress(e.target.value)} />
//!<Form.Control type="text" placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />