import React, { FC, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/Mutation";
import "./CreateUser.css";

const CreateUser: FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [createUser, { error, loading }] = useMutation(CREATE_USER);

  const onCreateUserBtnClick = async (e: any) => {
    e.preventDefault();
    await createUser({
      variables: {
        name: name,
        username: username,
        password: password,
      },
    })
      .catch(() => console.log(error))
      .then(() => {
        setName("");
        setUsername("");
        setPassword("");
      })
      .finally(() => console.log("user is created"));
  };

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter your name..."
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="enter your username..."
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter your password..."
      />
      <button onClick={onCreateUserBtnClick}>Create user</button>

      {loading && <p>Loading...</p>}
    </form>
  );
};

export default CreateUser;
