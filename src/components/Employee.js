import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useEffect, useState } from "react";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>EditX</Tooltip>}>
          <button
            className="btn text-warning btn-act"
            data-toggle="modal"
            onClick={handleShow}
          >
            <i className="material-icons" data-toggle="tooltip" title="Edit">
              &#xE254;
            </i>
          </button>
        </OverlayTrigger>

        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>DeleteX</Tooltip>}>
          <button
            className="btn text-danger btn-act"
            data-toggle="modal"
            onClick={() => deleteEmployee(employee.id)}
          >
            <i className="material-icons" data-toggle="tooltip" title="Delete">
              &#xE872;
            </i>
          </button>
        </OverlayTrigger>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;


        
//! OverlayTrigger ile react bootstrapten tooltip yani icon üstüne yazı çıkarma özelliği gerçekleştirdik.
