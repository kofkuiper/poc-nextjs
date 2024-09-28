"use client";

import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomePage from "../page";

type Props = {};

const TodoPage = (props: Props) => {
  const [todo, setTodo] = useState<string>();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    console.log("คุณกำลังพิมพ์...");
  }, [todo]);

  const onChangeTodo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo(e.target.value);
    setIsShow(false);
  };

  const addTodo = () => {
    setIsShow(true);
  };

  function notEmpty2() {}

  const trimTodo = (todo: string) => todo.trim();

  const countTodo = (todo: string) => todo.length;

  // Functional Programming
  // Write code for human
  const notEmpty = (todo: string) => countTodo(trimTodo(todo)) > 0;

  // arrow function
  const notEmpty0 = (todo: string) => todo.trim().length > 0;

  return (
    <Box>
      <TextField
        sx={{ background: "white" }}
        placeholder="add todo"
        onChange={onChangeTodo}
        value={todo}
      ></TextField>
      <Button onClick={addTodo}>Add Todo</Button>

      {/* Ternary operator */}
      {/* condition ? condition-true : condition-false */}

      {/* leak value */}
      {/* todo = '', todo = '   '  */}
      {todo !== undefined && notEmpty(todo) && isShow ? (
        <HomePage todo={todo} />
      ) : null}
    </Box>
  );
};

export default TodoPage;
