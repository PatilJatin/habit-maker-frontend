import React from "react";
import GoalCart from "../components/GoalCart";
import { Box, Grid } from "@chakra-ui/react";

const Home = () => {
  const Data = [
    {
      title: "Work",
      completeDays: 1,
      totalDays: 3,
      compTask: 0,
      totalTask: 4,
    },
    {
      title: "Work",
      completeDays: 4,
      totalDays: 7,
      compTask: 1,
      totalTask: 4,
    },
    {
      title: "Helth",
      completeDays: 18,
      totalDays: 21,
      compTask: 2,
      totalTask: 4,
    },
    {
      title: "Private",
      completeDays: 6,
      totalDays: 30,
      compTask: 3,
      totalTask: 4,
    },
    {
      title: "ETC",
      completeDays: 8,
      totalDays: 35,
      compTask: 4,
      totalTask: 4,
    },
  ];

  return (
    <Box
      m={"auto"}
      padding={"10px"}
      gap={"10px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        templateColumns={{
          lg: "repeat(4,1fr)",
          md: "repeat(3,1fr)",
          sm: "repeat(1,1fr)",
          base: "repeat(1,1fr)",
        }}
        gridTemplateRows={"auto"}
        gap={4}
        p="4"
      >
        {Data.map((item, index) => (
          <GoalCart key={index} {...item} />
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
