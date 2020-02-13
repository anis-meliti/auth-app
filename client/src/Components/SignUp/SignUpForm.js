import React, { useState } from 'react';
import { Container, Col, Row, Form, Card, Input, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import './Signup.css';
import { register } from '../../JS/actions';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [cred, setCred] = useState({
    login: '',
    password: '',
    password2: ''
  });
  //eslint-disable-next-line
  const [verif, setVerif] = useState(false);
  const onChangeHandler = e =>
    setCred({ ...cred, [e.target.name]: e.target.value });
  const regist = useSelector(state => state.authReducer.register);

  return (
    <div className='main-div page-header'>
      <div className='filter' />
      <Container>
        <Row>
          <Col className='ml-auto mr-auto' lg='6'>
            <Card className='card-register mt-5 ml-auto mr-auto'>
              <h3 className='title mx-auto'>Welcome</h3>
              {regist && <h3 className='title'>register fail</h3>}
              <Form className='register-form' name='formCred'>
                <label htmlFor='login'>Login</label>
                <Input
                  placeholder='Login'
                  type='text'
                  name='login'
                  onChange={onChangeHandler}
                />

                <label htmlFor='password'>Password</label>
                <Input
                  placeholder='Password'
                  type='password'
                  name='password'
                  onChange={onChangeHandler}
                />

                <label htmlFor='password2'>Confirm password</label>
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
                  type='submit'
                  onClick={e => {
                    e.preventDefault();
                    dispatch(register(cred));
                  }}
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

export default SignUpForm;
