import { Form, Button } from "react-bootstrap";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(email, password)
  }
  return (
    <>
      <h2>login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="my-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button type="submit" variant="dark" className="my-2">
          login
        </Button>
      </Form>
    </>
  );
}

export default LoginPage;
