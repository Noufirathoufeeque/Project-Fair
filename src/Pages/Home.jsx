import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/landingImg.jpg'
import ProjectCard from '../Components/ProjectCard'
import { Card } from 'react-bootstrap'
import Header from '../Components/Header'



const Home = () => {
    
    return (
    <>
    <Header/>
    <div style={{minHeight:'100vh'}} className='d-flex justity-content-center align-items-center rounded shadow w-100'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <h1 style={{fontSize:'80px'}}><i className="fa-brands fa-docker"></i>Project Fair</h1>
                    <p style={{textAlign:'justify'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nostrum aspernatur numquam ut alias repellat distinctio voluptas quos excepturi. Quae explicabo at ipsa rerum officiis? Modi omnis accusamus laboriosam repudiandae.
                    </p>
                    {
                        sessionStorage.getItem("token")?
                        <Link to={"/dashboard"} className="btn btn-warning">MANAGE YOUR PROJECTS</Link>
                        :<Link to={"/login"} className="btn btn-warning">START TO EXPLORE</Link>
                        }
                </div>
                <div className='col-lg-6'>
                    <img className='img-fluid' src={landingImg} alt="landing" />
                </div>
            </div>

        </div>
    </div>
    <div className='mt-5 text-center'>
        <h1 className='mb-5'>Explore Our Projects</h1>
        <marquee >
            <div className='d-flex'>
                <div className='me-5'>
                    <ProjectCard/>

                </div>

            </div>
        </marquee>
        <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS</button>

    </div>
    <div className='d-flex  align-items-center mt-5 flex-column'>
        <h1>Our Testimonials</h1>
        <div className='d-flex justify-content-evenly align-items-evenly mt-3 w-100 ' >
        <Card style={{ width: '18rem' }}>
         
         <Card.Body>
         <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
         <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" />
         <span>Max Miller</span>
         </Card.Title>
         <Card.Text>
            <div className='d-flex justify-content-center'>
                <div className='fa-solid fa-star text-warning'></div>
                <div className='fa-solid fa-star text-warning'></div>
                <div className='fa-solid fa-star text-warning'></div>
                <div className='fa-solid fa-star text-warning'></div>

            </div>
          <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
          </p>
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
         
         <Card.Body>
         <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
         <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BxnJvfe-jW3MSctMfM3mkkVk5RbhE4Khfg&s" />
         <span>Alan Titus</span>
         </Card.Title>
         <Card.Text>
            <div className='d-flex justify-content-center'>
                <div className='fa-solid fa-star text-warning'></div>
                <div className='fa-solid fa-star text-warning'></div>
                <div className='fa-solid fa-star text-warning'></div>
                <div className='fa-solid fa-star text-warning'></div>

            </div>
          <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
          </p>
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
         
         <Card.Body>
         <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
         <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.seekpng.com/png/detail/72-729869_circled-user-female-skin-type-4-icon-profile.png" />
         <span>Sandra Thomas</span>
         </Card.Title>
         <Card.Text>
            <div className='d-flex justify-content-center'>
                <div className='fa-solid fa-star text-warning'></div>
                <div className='fa-solid fa-star text-warning'></div>
                <div className='fa-solid fa-star text-warning'></div>
                <div className='fa-solid fa-star text-warning'></div>

            </div>
          <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
          </p>
        </Card.Text>
      </Card.Body>
      </Card>

        </div>

    </div>
    </>
  )
}

export default Home