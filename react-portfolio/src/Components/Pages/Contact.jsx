import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {Profile2, background } from '../Images'

const Contact = () => {
  return (
    <div className="contact">
      <img style={{position:'fixed',width:'100vw',zIndex:'-11',objectFit:'cover'}} src={background} />
      <Container className="mt-5 bg-primary text-light py-5" style={{border:"2px solid black"}}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <Row className="mb-3">
              <Col xs={12} md={4} className="text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                </div>
                <p>Address:</p>
                <p>198 West 21th Street,</p>
                <p>Suite 721 New York NY</p>
                <p>10016</p>
              </Col>
              <Col xs={12} md={4} className="text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fas fa-phone-alt fa-2x"></i>
                </div>
                <p>Phone:</p>
                <p>+ 1235 2355 98</p>
              </Col>
              <Col xs={12} md={4} className="text-center">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fas fa-envelope fa-2x"></i>
                </div>
                <p>Email:</p>
                <p>info@yoursite.com</p>
              </Col>
            </Row>
            <h4 className="text-center mb-3">Get in touch with us</h4>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="secondary" type="submit">
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