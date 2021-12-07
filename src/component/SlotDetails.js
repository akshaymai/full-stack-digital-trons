import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { bookApponaiment } from "../action/apponaiment";
import FormContainer from "./formContainer";

const SlotDetails = ({ match, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(bookApponaiment(name, email, phone, match.params.id));

    history.push("/");
    window.location.reload();
  };
  const handleClose = () => {
    history.push("/");
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <div>
              <Button type="submit" className="login-btn">
                Submit
              </Button>
              <Button
                type="submit"
                className="cancel-btn"
                onClick={handleClose}
              >
                Cancle
              </Button>
            </div>
          </Form>
        </FormContainer>
      </div>
    </div>
  );
};
export default SlotDetails;
