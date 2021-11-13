import React from "react";
import { Form, Button } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter-box">
          <h2>Get producivity tips delivered to your inbox</h2>
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Condimentum sociis
            mattis et commodo.
          </p>
          <div className="newsletter-form">
            <Form>
              <Form.Control type="email" placeholder="Email" />
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
