import React, { FC, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "../../graphql/Mutation";
import "./UpdatePassword.css";

const UpdatePassword: FC = () => {
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  const onChangePasswordBtn = (e: any) => {
    updatePassword({
      variables: {
        username: username,
        oldPassword: oldPassword,
        newPassword: newPassword,
      },
    });
    e.preventDefault();
  };

  return (
    <form>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="enter your username..."
      />
      <input
        type="password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        placeholder="enter your current password..."
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="enter your new password..."
      />
      <button type="submit" onClick={onChangePasswordBtn}>
        Change password
      </button>
    </form>
  );
};

export default UpdatePassword;
