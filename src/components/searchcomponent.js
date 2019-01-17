import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardBody, Button, CardText, CardTitle, CardSubtitle, CardImg, 
  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label  } from 'reactstrap';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


class Search extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      query: '',
      results: []
    }

    this.logout = this.logout.bind(this);

    if(!cookies.get("user")) {
      this.props.history.push('/login');
    }

  }

  logout() {
    cookies.remove("user");
    this.props.history.push('/login');
  }
  
  componentDidMount(){
    this.getInfo();
  }
  getInfo = () => {
    axios.get(`https://swapi.co/api/planets/`)
      .then(({ data }) => {
        this.setState({
          results: data.results
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      } 
    })
  }

  planetdata() {
    return this.state.results.map((planet) => {
      return(
        <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{planet.name}</CardTitle>
          <CardSubtitle>{planet.population}</CardSubtitle>
          <CardText><a href={planet.url}>{planet.url}</a></CardText>
        </CardBody>
      </Card>
      );
    });
  }

  render(){
    // const planetdata= this.state.results ? this.state.results.map(planet=>{
    //   return(
    //     <Card>
    //     <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle>{planet.name}</CardTitle>
    //       <CardSubtitle>{planet.population}</CardSubtitle>
    //       <CardText><a href={planet.url}>{planet.url}</a></CardText>
    //       <Button>Button</Button>
    //     </CardBody>
    //   </Card>
    //   );
    // }) : null;

  
    return (
      <React.Fragment>
        <Navbar color="light" >
        <Nav className="ml-auto" navbar>
            <NavItem>
                <Button outline onClick={this.logout}><span className="fa fa-sign-out fa-lg"></span> Logout</Button>
            </NavItem>
        </Nav>
        </Navbar>
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
      <div className="container">
      {this.planetdata()}
      </div>
</React.Fragment>
    )
  };
}

export default Search
