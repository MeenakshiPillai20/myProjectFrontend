import React, { useState,createContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../../images/logo2bg.png' 
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
const Data = createContext();

export default function Header() {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [formData, setFormData] = useState([]);
  const [formData1, setFormData1] = useState([]);
  const [isShown, setIsShown] = useState(true);
  const [isShown1, setIsShown1] = useState(true);
  const [showDash, setShowDash] = useState(false);
  const handleRegisterClose = () => setShow(false);
  const handleRegisterShow = () => setShow(true);

  const handleLoginClose = () => setShow1(false);
  const handleLoginShow = () => setShow1(true);

  const navigate = useNavigate();
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  //   console.log(event)
  // };
 
  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };  const handleForm1 = (e) => {
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await fetch('https://my-project-backend-kappa.vercel.app/register',{
      method:'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    
    })
    const data = await response.json();
    const msg = data.message;
    console.log(msg);
    
    handleRegisterClose();
    alert(msg)
   
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    console.log(formData1);

    const response = await fetch('https://my-project-backend-kappa.vercel.app/login',{
      method:'POST',
      body:JSON.stringify(formData1),
      headers:{
        'Content-Type':'application/json'
      }
    })
   

    const data = await response.json();
    const msg1 = data.message;
    console.log(data.username);
   
    handleLoginClose()
    alert(msg1)
    setMsg(data.username)
    setIsShown(current => !current);
    setIsShown1(current => !current);
    const data1 ={name:data.username}
    navigate('/dashboard',{ state: {data1} })
    // navigate("/dashboard", {
    //   state: {
    //      msg
    //   }})
    setShowDash(true)
  };
 
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="logo-img2" alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"  style={{visibility: isShown ? 'visible' : 'hidden'}}>
              <Nav.Link href="#home" className="ms-5">
                Home
              </Nav.Link>
              <NavDropdown
                title="Features"
                id="collasible-nav-dropdown"
                className="ms-3"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  {" "}
                  Another action{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  {" "}
                  Separated link{" "}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing" className="ms-3">
                Pricing
              </Nav.Link>
            </Nav>
            <Nav style={{display: isShown ? 'flex' : 'none'}}>
              <Nav.Link onClick={handleLoginShow} className="me-5">
                Log in
              </Nav.Link>
              <Button variant="light" onClick={handleRegisterShow}>
                {" "}
                Get Started{" "}
              </Button>
            </Nav>
            <div  className="text-white" style={{display: isShown1 ? 'none' : 'block'}}>
               <AiOutlineUser className="me-3"/>{msg}
               {/* <Button variant="light" onClick={handleLogout} className="ms-5"> Logout </Button> */}
               {/* <Link to="/" className="btn btn-link bg-white text-dark text-decoration-none ms-5" onClick={}>Logout</Link> */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={show}
        onHide={handleRegisterClose}
        backdrop="static"
        keyboard={false}
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleForm}
                placeholder="Enter Name"
                autoFocus
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                name="mobile"
                onChange={handleForm}
                placeholder="Enter Mobile Number"
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleForm}
                placeholder="name@example.com"
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleForm}
                placeholder="Create strong Password"
                
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleRegisterClose}>
              Close
            </Button>
            <input type="submit" value="Sign up" className="btn btn-primary"/>

          </Modal.Footer>
        </Form>
      </Modal>

      <Modal
        show={show1}
        onHide={handleLoginClose}
        backdrop="static"
        keyboard={false}
      >
         <Form onSubmit={handleSubmit1}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleForm1}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleForm1}
                placeholder="Enter Password"
                required
              />
            </Form.Group>
         
        </Modal.Body>
        <Modal.Footer>
          <span>Don't have an account?</span>
          <Nav.Link
            onClick={() => {
              handleLoginClose();
              handleRegisterShow();
            }}
            className="me-5 text-primary text-decoration-underline"
          >
            Sign up
          </Nav.Link>
          <input type="submit" value="Log in" className="btn btn-primary"/>

        </Modal.Footer>
        </Form>
      </Modal>
   {
    showDash ? 
    <Data.Provider value={msg}>
      <Dashboard/>
    </Data.Provider>
    : null
   }
    </>
  );
}

export {Data}
