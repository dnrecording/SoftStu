import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";

function HomePage() {
    const navigate = useNavigate();

    return (
        <Layout>
            <h1>Home Page</h1>
            <Button class="btn btn-primary mx-2" onClick={() => {navigate("/content")}}>Go to Content</Button>
        </Layout>
    );
}

export default HomePage;
