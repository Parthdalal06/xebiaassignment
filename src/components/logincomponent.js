import React, { Component } from "react";
import { Container, Col, Form,FormGroup, Label, Input,Button } from 'reactstrap';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: "",
    };

    this.validateForm = this.validateForm.bind(this);
    this.updateUsernameState = this.updateUsernameState.bind(this);
    this.updatePasswdState = this.updatePasswdState.bind(this);
    this.login = this.login.bind(this);
  }

  validateForm() {
    if(this.state.username.length > 0 && this.state.password.length > 0) {
      return <Button type="button" onClick={this.login}>Submit</Button>;
    } else {
      return <Button type="button" disabled>Submit</Button>;
    }
  }

  updateUsernameState(e) {
    this.setState({username: e.target.value});
  }

  updatePasswdState(e) {
    this.setState({password: e.target.value});
  }

  login(e) {
    if(this.state.username === "Luke Skywalker" && this.state.password === "19BBY") {
      cookies.set('user', this.state.username, { path: '/' });
      this.setState({error: ""});
      this.props.history.push('/search');
    } else {
      this.setState({error: "Plase make sure you're entering correct username & password"});
    }
  }

  render(){
    if(this.state.error) {
      var error = <span>{this.state.error}</span>;
    } else {
      var error = <span></span>;
    }
    return (
      <Container className="App">
      <div className="container">
      <h2>Sign In</h2>
      <Form className="form">
        <Col>
          <FormGroup>
            <Label>Username</Label>
            <Input
              name="username"
              id="exampleusername"
              placeholder="Luke Skywalker"
              onChange={this.updateUsernameState}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="19BBY"
              onChange={this.updatePasswdState}
            />
          </FormGroup>
        </Col>
        <p >{error}</p>
        {this.validateForm()}
      </Form>
      </div>
    </Container>
    );
  }
}