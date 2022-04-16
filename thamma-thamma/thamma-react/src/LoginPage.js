import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";

function LoginPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Login Page</h1>
            <Button class="btn btn-primary mx-2" onClick={() => {navigate("/")}}>Login</Button>
            <Button class="btn btn-primary mx-2" onClick={() => {navigate("/register")}}>Register</Button>
        </div>
    );
}

export default LoginPage;
