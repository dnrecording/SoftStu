import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Layout } from "./Layout";
import * as ReactBootstrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserTable = () => {
  const navigate = useNavigate();
  const adminID = "62526df6d30be6196cd5f864"; // Admin ID
  const url = "https://localhost:7290/api/user";
  const [userList, setuserList] = useState({ lists: [] });

  async function onBan(ban_data, id) {
    var banUrl = url + `/${id}`
    await axios.put(banUrl, ban_data);
    window.location.reload(false); // refresh window
  }

  async function onUnBan(unban_data, id) {
    var unbanUrl = url + `/${id}`
    await axios.put(unbanUrl, unban_data);
    window.location.reload(false); // refresh window
  }

  useEffect(() => {
    const fetchUserList = async () => {
      const { data } = await axios.get(url);
      setuserList({ lists: data });
      // console.log(data);
    };
    fetchUserList();
  }, [setuserList]);

  return (
    <Layout>
      <Container class="mt-4">
        <ReactBootstrap.Table striped bordered hover>
          <thead class="text-center">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {userList.lists &&
              userList.lists.map((item) => (
                <tr key={item.id}>
                  <td>{<p onClick={() => {navigate(`/profile/${item.id}`)}}>{item.username}</p>}</td>
                  <td>{item.email}</td>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  
                  <td class="text-center">
                    {item.status === "true" && item.id !== adminID && (
                      <button
                        type="button"
                        id="ban"
                        name="ban"
                        class="btn btn-danger"
                        onClick={() => {
                          let banData = {
                            username: item.username,
                            password: item.password,
                            email: item.email,
                            fname: item.fname,
                            lname: item.lname,
                            img: item.img,
                            status: "false",
                          };
                          onBan(banData, item.id)
                        }}
                      >
                        Ban
                      </button>
                    )}
                    {item.status === "false" && (
                      <button
                        type="button"
                        id="ban"
                        name="ban"
                        class="btn btn-primary"
                        onClick={() => {
                          let unbanData = {
                            username: item.username,
                            password: item.password,
                            email: item.email,
                            fname: item.fname,
                            lname: item.lname,
                            img: item.img,
                            status: "true",
                          };
                          onUnBan(unbanData, item.id)
                        }}
                      >
                        Unban
                      </button>
                    )}
                    {item.id === adminID && (
                      <button
                        type="button"
                        id="ban"
                        name="ban"
                        class="btn btn-secondary"
                        disabled
                      >
                        I am Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </ReactBootstrap.Table>
      </Container>
    </Layout>
  );
};

export default UserTable;
