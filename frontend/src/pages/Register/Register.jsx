import React from 'react';
import { Link } from "react-router-dom";
import {Container, Header, Content, Footer, Schema, FlexboxGrid, Panel, Form, ButtonToolbar, Button} from 'rsuite';


const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  username: StringType().isRequired('This field is required.'),  
  firstname: StringType().isRequired('This field is required.'),
  lastname: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  password: StringType().isRequired('This field is required.'),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, 'The two passwords do not match')
    .isRequired('This field is required.')
});

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref} style={{ width: '-webkit-fill-available'}}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

const Register = () => {

    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      verifyPassword: ''
    });
  
    const handleSubmit = () => {
      if (!formRef.current.check()) {
        console.error('Form Error');
        return;
      }
      console.log(formValue, 'Form Value');
    };

    const handleLoginButton = () => {

    };

    return (
            <Container>
                <Content style={{marginTop: '10vh'}}>
                    <FlexboxGrid justify="center"  >
                        <FlexboxGrid.Item colspan={12} style={{width: '30%'}} >
                            <Panel header={<h3>Register</h3>} bordered style={{backgroundColor: '#ecf0f1'}} >
                                <Form fluid
                                    ref={formRef}
                                    onChange={setFormValue}
                                    onCheck={setFormError}
                                    formValue={formValue}
                                    model={model}
                                    >
                                    <TextField name="username" label="Username" />
                                    <div style={{display: 'flex', width: '-webkit-fill-available'}}>
                                        <TextField name="firstname" label="First Name" />
                                        <TextField name="lastname" label="Last Name"/>
                                    </div>
                                    <TextField name="email" label="Email" />
                                    <TextField name="password" label="Password" type="password" autoComplete="off" />
                                    <TextField
                                        name="verifyPassword"
                                        label="Verify password"
                                        type="password"
                                        autoComplete="off"
                                    />

                                    <ButtonToolbar>
                                        <Button appearance="primary" onClick={handleSubmit}>
                                        Submit
                                        </Button>
                                        <Button appearance="link" href='/login'>Already Registered? Login</Button>
                                    </ButtonToolbar>
                                </Form>
                            </Panel>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </Container>
    );
  
};

export default Register;
