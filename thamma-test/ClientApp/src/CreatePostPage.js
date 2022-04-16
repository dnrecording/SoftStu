import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";

function CreatePostPage() {
    const navigate = useNavigate();

    return (
        <Layout>
            <h1>CreatePost Page</h1>
            <Button class="btn btn-primary mx-2" onClick={() => {navigate("/")}}>Go Home</Button>
        </Layout>
    );
}

export default CreatePostPage;