import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineAntDesign } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function Header() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [formData, setFormData] = useState([]);

  const handleRegisterClose = () => setShow(false);
  const handleRegisterShow = () => setShow(true);

  const handleLoginClose = () => setShow1(false);
  const handleLoginShow = () => setShow1(true);

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
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await fetch('http://localhost:4000/user',{
      method:'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <AiOutlineAntDesign className="me-2" />
            My Projects
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
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
            <Nav>
              <Nav.Link onClick={handleLoginShow} className="me-5">
                Log in
              </Nav.Link>
              <Button variant="light" onClick={handleRegisterShow}>
                {" "}
                Get Started{" "}
              </Button>
            </Nav>
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
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                required
              />
            </Form.Group>
          </Form>
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
          <Button variant="primary" onClick={handleLoginClose}>
            Log in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
