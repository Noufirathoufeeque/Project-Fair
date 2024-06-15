import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';
import profileImage from '../assets/profileimage.jpg'



const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="d-flex-justify-content-evenly">
      <h3 className="text-warning">Profile</h3>
      <Button onClick={() => setOpen(!open)} className='btn text-warning fw-bolder'><i className='fa-solid fa-chevron-down'></i></Button>
      </div>
      <Collapse in={open}>
        <div className='row align-items-center justify-content-center shadow rounded p-2' id="example-collapse-text">
          <label className='text-center mb-2'>
            <input type="file" style={{display:'none'}} />
            <img width={'200px'} height={'200px'} className='rounded-circle' src={profileImage} alt="" />
          </label>
          <div className="mb-2">
            <input type="text" placeholder='GITHUB URL'  className='form-control'/>
          </div>
          <div className="mb-2">
            <input type="text" placeholder='LINKEDIN URL'  className='form-control'/>
          </div>
          <div className="d-grid">
            <button className='btn btn text-warning'>Login</button>
          </div>
        </div>
      </Collapse>
    
    </>
  )
}

export default Profile