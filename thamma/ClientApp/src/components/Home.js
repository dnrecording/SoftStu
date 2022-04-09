import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    const contentCard = (
      <Card className='contentCard'>
        <div className='row no-gutters'></div>
        <Card.Img className='contentImage' variant="top" src="temple1.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">more details...</Button>
        </Card.Body>
      </Card>)
    return (
      <div className="App">
      <h2 className="app-header">THAMMA</h2>
      <div className="app-grid">
        <p>{contentCard}</p>
        <p>{contentCard}</p>
        <p>{contentCard}</p>
        <p>{contentCard}</p>
      </div>
    </div>
    );
  }
}
