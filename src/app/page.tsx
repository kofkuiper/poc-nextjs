"use client";

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

type Props = { todo: string };

const HomePage = ({ todo }: Props) => {
  const [counting, setCounting] = useState<number[]>([]);

  const arr = ["a", "b", "c", "d"];

  useEffect(() => {
    todo && setCounting(Array.from({ length: todo.length }, (_, i) => i + 1));
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "32px" }}>
      <Box
        sx={{
          color: "green",
          display: "flex",
          gap: "32px",
          flexDirection: "column",
        }}
      >
        {counting.map((value) => (
          <Box
            key={value}
            sx={{
              border: 1,
              padding: "32px",
              color: `${todo === "black" ? "black" : "red"}`,
            }}
          >
            {todo}
          </Box>
        ))}

        {arr.map((value, index) => (
          <div key={value}>
            value = {value}, index ={index}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
