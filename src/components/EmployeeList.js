import { useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContext";
import {Alert, Button, Modal} from "react-bootstrap"
import AddForm from "./AddForm";
import Pagination from "./Pagination";

const EmployeeList = () => {
  const { sortedEmployess } = useContext(EmployeeContext);
  const [show, setShow] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [currentPage, setCurrentPage] = useState(1) //pagination
  const [employeesPerPage] = useState(2) //sayfada kaç çalışanın olması gerektiğini gösterir.

 const handleClose = ()=> setShow(false);
 const handleShow = ()=> setShow(true);
 //*const handleShowAlert=()=>setShowAlert(true);

 const handleShowAlert=()=>{
  setShowAlert(true)
  setTimeout(() => {
    setShowAlert(false)
  }, 2000);
 };

 useEffect(() => { 
  handleClose();
  return()=>{
    handleShowAlert();
  }
 }, [sortedEmployess])

 const indexOfLastEmployee = currentPage * employeesPerPage;
 const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
 const currentEmployees = sortedEmployess.slice(indexOfFirstEmployee,indexOfLastEmployee);
 const totalPagesNum = Math.ceil(sortedEmployess.length /employeesPerPage)

 

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>

      <Alert show={showAlert} variant="success">
        Employee List successfully updated!.
      </Alert>

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
        {
          currentEmployees.map((employee)=>{
            return(
              <tr key={employee.id}>
              <Employee employee={employee}/>
            </tr>
            )
            
          })
        }
        </tbody>
      </table>
      <Pagination 
      pages={totalPagesNum} 
      setCurrentPage={setCurrentPage}
      currentEmployees ={currentEmployees}
      sortedEmployees ={sortedEmployess}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>
            Add Employee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default EmployeeList;


//! .sort((a,b)=>a.name.localeCompare(b.name)) 53.satırda isimleri alfabetik sıraya göre sıraladık .(1.YOL)
//! .sort((a,b)=>(a.name < b.name ? -1 : 1)); 53.satırda isimleri alfabetik sıraya göre sıraladık .(2.YOL)
//! 3. yol olarakta işlemi burada değilde contexts dosyasında yapıp buraya sort edilmiş halini gönderebiliriz.