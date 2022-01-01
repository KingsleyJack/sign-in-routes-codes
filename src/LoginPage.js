import React from "react";
import { Button, Form} from "reactstrap";
import { Icon} from '"semantic-ui-react"'
import rocket from "./undraw_maker_launch_crhe.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  return (
    <div className="container signMode">
      <div className="form-container">

          <div className="signin-signup">
            <Form className="sign-form sign-in-form ">
              <h2 className="form-title">Sign in</h2>
              <div className="input-field">
                <Icon name="user" />
                <input
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="input-field">
                <Icon name="lock" />
                <input
                  type="password"
                  placeholder="Password"
                />
              </div>
              <Button type="submit" className="sign-up-button">
                LOGIN
              </Button>
            </Form>

          </div>
      </div>
      <div className="panel-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Let's get you started with a new account to join the community
            </p>
            <Link to="/register">
              <Button className="transparent" onClick={() => setActive(true)}>
                SIGN UP
              </Button>
            </Link>
          </div>
          <img src={rocket} className="image" alt="rocket" />
        </div>
      </div>
    </div>
  );
}

export default Login;