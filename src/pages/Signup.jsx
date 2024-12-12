import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <div className="w-50 m-auto">
        <h2
          className="display-1 
        text-center 
        text-primary 
        p-3
        mt-5"
        >
          Sign UP
        </h2>
        <Form
          className="
        d-flex
        flex-column 
        gap-3 
        m-auto  
        p-5"
        >
          <div className="
          w-50
          m-auto
          d-flex
          gap-3
          ">
            <FormControl
              form="text"
              size="lg"
              className="w-50 m-auto d-inline"
              type="text"
              placeholder="First Name..."
            />
            <FormControl
              form="text"
              size="lg"
              className="w-50 m-auto d-inline"
              type="text"
              placeholder="Last Name..."
            />
          </div>
          <FormControl
            form="text"
            size="lg"
            className="w-50 m-auto"
            type="text"
            placeholder="Username"
          />
                      <FormControl
              form="email"
              size="lg"
              className="w-50 m-auto d-inline"
              type="text"
              placeholder="Your Email..."
            />
          <div className="
          w-50
          m-auto
          d-flex
          gap-3
          ">
            <FormControl
              form="password"
              size="lg"
              className="w-50 m-auto d-inline"
              type="text"
              placeholder="Type Password"
            />
            <FormControl
              form="password"
              size="lg"
              className="w-50 m-auto d-inline"
              type="text"
              placeholder="Confirm Password"
            />
          </div>
          <Button className="m-auto w-50" type="submit">
          Sign UP
          </Button>
        </Form>
        <div className="m-auto text-center">
          <p>
            Already Have a account?
             <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
