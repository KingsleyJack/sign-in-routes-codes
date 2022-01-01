import React, {useState} from "react";
import { Button, Form} from "reactstrap";
import {Icon} from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import play from "../images/undraw_press_play_bx2d.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Register() {
  const [next, setNext] = useState(false);
  const [startDate, setStartDate] = useState(null);

  return (
    <div className={`container ${active && `signMode`}`}>
      <div className="form-container">
          <div className="signin-signup">
            <Form
              className={`${next && `nextForm`}
              sign-form sign-up-form one `}
            >
              <h2 className="form-title">Sign Up</h2>
              <div className="input-field">
                <Icon name="user" />
                <input
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="input-field">
                <Icon name="envelope" />
                <input
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="input-field">
                <Icon name="calendar alternate outline" />
                <DatePicker
                  name="age"
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Date of birth"
                  popperPlacement="top"
                  selected={startDate}
                />
              </div>
              <Button
                className="sign-up-button"
                onClick={() => setNext(true)}
              >
                NEXT
              </Button>
            </Form>

            <Form
              onSubmit={onSubmit}
              className={` ${
              next && `nextForm`}
              sign-form sign-up-form two `}
            >
              <h2 className="form-title">Continue</h2>
              <div className="input-field">
                <Icon name="lock" />
                <input
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="input-field">
                <Icon name="lock" />
                <input
                  type="Password"
                  placeholder="Confirm Password"
                />
              </div>
              <h6>by signing up you have agreed to our terms and conditions</h6>
              <Button className="sign-up-button" type="submit">
                FINISH
              </Button>
            </Form>
          </div>
      </div>
      <div className="panel-container">
        <div className="panel right-panel">
          <div className="content">
            <h3>One of Us?</h3>
            <p>Continue from where you left off</p>
            <Link to="/login">
              <Button className="transparent" onClick={() => setActive(false)}>
                SIGN IN
              </Button>
            </Link>
          </div>
          <img src={play} className="image" alt="play image" />
        </div>
      </div>
    </div>
  );
}

export default Register;