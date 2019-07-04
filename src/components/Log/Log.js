import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText, FormFeedback,
} from 'reactstrap';
import './Log.scss';
import {Link} from "react-router-dom";

class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
            validate: {
                emailState: '',
            },
        }
        this.handleChange = this.handleChange.bind(this);
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({ validate })
    }

    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${this.state.email}`)
    }

    render() {
        const { email, password } = this.state;
        return (
            <Container className="log">
                <h2>Sign In</h2>
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                value={email}
                                valid={this.state.validate.emailState === 'has-success'}
                                invalid={this.state.validate.emailState === 'has-danger'}
                                onChange={(e) => {
                                    this.validateEmail(e)
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback valid>
                                That's a tasty looking email you've got there.
              </FormFeedback>
                            <FormFeedback>
                                Uh oh! Looks like there is an issue with your email. Please input a correct email.
              </FormFeedback>
                            <FormText>Your username is most likely your email.</FormText>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={password}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Link exact to={"/home"}>
                    <Button>Submit</Button>
                    </Link>
                </Form>
            </Container>
        );
    }
}

export default Log;
// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
// import {Link} from 'react-router-dom';
// import "./Log.scss";

// const Log = () => {
//     return (
//         <MDBContainer class="log">
//             <MDBRow>
//                 <MDBCol md="6">
//                     <form>
//                         <p className="h5 text-center mb-4">Sign in</p>
//                         <div className="grey-text">
//                             <MDBInput
//                                 label="Type your email"
//                                 icon="envelope"
//                                 group
//                                 type="email"
//                                 validate
//                                 error="wrong"
//                                 success="right"
//                             />
//                             <MDBInput
//                                 label="Type your password"
//                                 icon="lock"
//                                 group
//                                 type="password"
//                                 validate
//                             />
//                         </div>
//                         <div className="text-center">
//                             <Link exact to={"/home"}>
//                                 <MDBBtn class="button button-log">Login</MDBBtn></Link>

//                         </div>
//                     </form>
//                 </MDBCol>
//             </MDBRow>
//         </MDBContainer>
//     );
// };

// export default Log;