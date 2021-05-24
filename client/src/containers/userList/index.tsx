import React, { FC, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { GET_ALL_USER } from "../../graphql/Queries";
import { createData } from "../../configs/userList.config";
import { DELETE_USER } from "../../graphql/Mutation";

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
  },
});

const UserList: FC = () => {
  const classes = useStyles();

  const { data, loading } = useQuery(GET_ALL_USER);
  const [deleteUser, { error }] = useMutation(DELETE_USER);

  const rows: any = [];
  data &&
    data.getAllUser.map((val: any) => {
      rows.push(createData(val.id, val.name, val.username, val.password));
    });

  const onDeleteUserBtn = (id: number): void => {
    deleteUser({ variables: { id: id } });
  };

  return (
    <>
      <TableContainer component={Paper}>
        {loading && <p>Loading...</p>}
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.password}</TableCell>
                <TableCell align="left">
                  <button onClick={() => onDeleteUserBtn(row.id)}>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserList;
