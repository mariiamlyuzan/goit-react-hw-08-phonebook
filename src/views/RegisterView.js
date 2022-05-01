import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
`;
const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  margin: 0 auto;
  background-color: white;
  border-radius: 4px;
`;
const Title = styled.h1`
  text-align: center;
  color: #ff6b08;
  margin-bottom: 20px;
`;

const Button = styled.button`
  min-height: 44px;
  min-width: 112px;
  border-radius: 5px;
  border: 1px solid #ff6b08;
  background-color: transparent;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  &:hover {
    color: white;
    background-color: #ff6b08;
    border: 0px;
  }
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  padding: 13px 20px 13px 42px;
  outline: none;
  margin-bottom: 20px;
`;
export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    console.log({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Title>Registration</Title>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <Input
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button type="submit">To register</Button>
      </Form>
    </Wrapper>
  );
}
