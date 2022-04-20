import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from "axios";
import "./HomePage.css";
import { Layout } from "./components/Layout";

function HomePage() {
    const navigate = useNavigate();

    const contentCard = (
        <Card className='contentCard'>
          <div className='row no-gutters'></div>
          <div class="col-auto">
            <img className='contentImage' src="temple1.jpg" />
          </div>
          <div class="col">
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button class="btn btn-primary mx-2" onClick={() => {navigate("/content")}}>more details...</Button>
              <Button className='like-button'>Like</Button>
            </Card.Body>
          </div>
        </Card>
        )

    return (
        <Layout>
            <p>{contentCard}</p>
            <p>{contentCard}</p>
            <p>{contentCard}</p>
            <p>{contentCard}</p>
        </Layout>
    );
}

export default HomePage;
