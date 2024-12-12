import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-50 m-auto">
        <h2 className="display-1 
        text-center 
        text-primary 
        p-3
        mt-5">Login</h2>
        <Form className="
        d-flex
        flex-column 
        gap-3 
        m-auto  
        p-5">
          <FormControl
            form="text"
            size="lg"
            className="w-50 m-auto"
            type="text"
            placeholder="Username"
          />
          <FormControl
            form="password"
            size="lg"
            className="w-50 m-auto"
            placeholder="Password"
          />
          <Button className="m-auto w-50" type="submit">
            Login
          </Button>
        </Form>
        <div className="m-auto text-center">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
          <p>
            Forgot Password? <Link to="/forget">Reset Password</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
