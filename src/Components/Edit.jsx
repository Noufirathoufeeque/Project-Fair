import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadImg from '../assets/addimage.jpg'
const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <button onClick={handleShow} className='btn'><i className='fa-solid fa-edit'></i></button>
    <Modal size='lg' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label >
                <input type="file" style={{display:'none'}} />
                <img height={'200px'} className='img-fluid' src={uploadImg} alt="" />
              </label>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Title' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Languages Used in Project' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Github Link' />
              </div>
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Website Link' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit