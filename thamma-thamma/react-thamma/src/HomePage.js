import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Profile.css";
import { Layout } from "./components/Layout";
import ContentCard from "./components/ContentCard";

const client = axios.create({
  baseURL: "https://localhost:7290/api/post/",
});

function HomePage() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await client.get("");
      setPost(response.data);
    }
    getPost();
  }, []);
  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";
  return (
    <Layout>
      <h1>Home Page</h1>
      {post && post.length
        ? post.map((item, i) => (
          <ContentCard  id ={item.id} title = {item.title} content = {item.content} img = {item.img}/>
          ))
        : ""}
    </Layout>
  );
}

export default HomePage;
