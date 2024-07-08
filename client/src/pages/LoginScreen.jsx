import { useEffect, useState } from "react";
// Redux slices and hooks
import { setCredentials } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
// Components
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
// Utilities
import { toast } from "react-toastify";
// Icons
import { FaEye, FaEyeSlash } from "react-icons/fa";
// Routing
import { Link, useNavigate } from "react-router-dom";
// UI Components
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter all fields");
      return;
    }
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              variant="primary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
            </Button>
          </InputGroup>
        </Form.Group>
        {isLoading && <Loader />}
        <Button className="mt-3" type="submit" variant="primary">
          Sign In
        </Button>
        <Row className="py-3">
          <Col>
            Don&apos;t Have an account?
            <strong>
              <Link to="/register">Register here</Link>
            </strong>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
