import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { background } from '../Images';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [fromName, setFromName] = useState(""); // Renamed to match template variable
  const [fromEmail, setFromEmail] = useState(""); // Optional if you want to include email
  const [message, setMessage] = useState("");
  const [toName, setToName] = useState("Rohit Saini"); // Assuming this is static

  const formRef = useRef(); // Create a ref for the form element

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    sendEmail();
  };

  const sendEmail = () => {
    const serviceId = "service_93rinbs";
    const publicKey = "vzhcQsMXHOPmgvLVD";
    const templateID = "template_llgddn6";

    emailjs.sendForm(serviceId, templateID, formRef.current, publicKey)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <img style={{position:'fixed',width:'100vw',zIndex:'-11',objectFit:'cover'}} src={background} />
      <Container className="mt-5 bg-primary text-light py-5" style={{border:"2px solid black"}}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Row className="mb-3">
                {/* Your contact details here */}
              </Row>
              <h4 className="text-center mb-3">Get in touch with us</h4>

              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="from_name" value={fromName} onChange={(e) => setFromName(e.target.value)} type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control name="from_email" value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" value={message} onChange={(e) => setMessage(e.target.value)} as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <input type="hidden" name="to_name" value={toName} /> {/* Hidden field for recipient's name */}
              <Button type="submit" variant="secondary">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
