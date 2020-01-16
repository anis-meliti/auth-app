/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Container, Col, Row, Form, Card, Input, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';

import './Signin.css';
import { register } from '../../JS/actions';

const SigninForm = () => {
  const [cred, setCred] = useState();
  const dispatch = useDispatch();
  const onChangeHandler = e =>
    setCred({ ...cred, [e.target.name]: e.target.value });
  const addUser = () => {
    const { password, password2 } = cred;
    password === password2
      ? dispatch(register(cred))
      : alert('password and confirmation is not the some');
  };
  return (
    <div className='main-div page-header'>
      <div className='filter' />
      <Container>
        <Row>
          <Col className='ml-auto mr-auto' lg='6'>
            <Card className='card-register mt-5 ml-auto mr-auto'>
              <h3 className='title mx-auto'>Welcome</h3>
              <Form className='register-form'>
                <label>Login</label>
                <Input
                  placeholder='Login'
                  type='text'
                  name='login'
                  onChange={onChangeHandler}
                />
                <label>Password</label>
                <Input
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={onChangeHandler}
                />
                <label>Confirm password</label>
                <Input
                  placeholder='Retaper votre Confirm password'
                  type='password'
                  name='password2'
                  onChange={onChangeHandler}
                />
                <Button
                  block
                  className='btn-round'
                  color='danger'
                  onClick={addUser}
                >
                  Register
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SigninForm;
