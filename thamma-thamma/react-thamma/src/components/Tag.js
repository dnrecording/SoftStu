import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Layout } from "./Layout";
import * as ReactBootstrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Card } from "react-bootstrap";
import  "./ContentCard.css";

function Tag(props) {
  const navigate = useNavigate();
  return (
    <div  >
        <button style={{ borderRadius: "1rem", ...props.extraStyles}}>{props.tag} </button>
    </div>
  );
}

export default Tag;
