import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { UpdateApponaiment } from "../action/apponaiment";
import FormContainer from "./formContainer";
import Loader from "./loader";

const SlotEditDetails = ({ match, history }) => {
  let ids = match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appid, setAppid] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  // const apponaimentDetails = useSelector((state) => state.getappoiment);
  // // const { apponaiment, loading } = apponaimentDetails;
  // // console.log(apponaiment);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = () => {
    setLoading(true);
    fetch(`http://localhost:5000/find/appointment/${ids}`)
      .then((response) => response.json())
      .then((apponaiment) => {
        setName(apponaiment.name);
        setEmail(apponaiment.email);
        setPhone(apponaiment.phone);
        setAppid(apponaiment._id);
        setLoading(false);
      });
  };
  const EditSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(UpdateApponaiment(name, email, phone, appid));
    history.push("/");
  };
  const handleClose = () => {
    history.push("/");
  };
  return (
    <>
      {loading && <Loader />}
      <div className="auth-wrapper">
        <div className="auth-inner">
          <FormContainer>
            <Form onSubmit={EditSubmitHandler}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Edit name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Edit email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Edit phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary" className="login-btn">
                Edit
              </Button>
              <Button
                type="submit"
                className="cancel-btn"
                variant="denger"
                onClick={handleClose}
              >
                Cancle
              </Button>
            </Form>
          </FormContainer>
        </div>
      </div>
    </>
  );
};
export default SlotEditDetails;
