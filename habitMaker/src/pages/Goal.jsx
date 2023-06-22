import {
  Box,
  Card,
  CardBody,
  Checkbox,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RangeComponent from "../components/RangeComponent";

const GoalData = [
  {
    id: 1,
    title: "Work",
    completeDays: 1,
    totalDays: 3,
    compTask: 0,
    totalTask: 4,
    taskArr: [
      {
        title: "abc",
        status: false,
      },
      {
        title: "def",
        status: false,
      },
    ],
  },
  {
    id: 2,
    title: "Work",
    completeDays: 4,
    totalDays: 7,
    compTask: 0,
    totalTask: 4,
    taskArr: [
      {
        title: "ghi",
        status: false,
      },
      {
        title: "jkl",
        status: false,
      },
    ],
  },
  {
    id: 3,
    title: "Helth",
    completeDays: 18,
    totalDays: 21,
    compTask: 0,
    totalTask: 4,
    taskArr: [
      {
        title: "mno",
        status: false,
      },
      {
        title: "pqr",
        status: false,
      },
    ],
  },
  {
    id: 4,
    title: "Private",
    completeDays: 6,
    totalDays: 30,
    compTask: 0,
    totalTask: 4,
    taskArr: [
      {
        title: "stu",
        status: false,
      },
      {
        title: "vwx",
        status: false,
      },
    ],
  },
  {
    id: 5,
    title: "ETC",
    completeDays: 8,
    totalDays: 35,
    compTask: 0,
    totalTask: 4,
    taskArr: [
      {
        title: "xyz",
        status: false,
      },
      {
        title: "abc",
        status: false,
      },
    ],
  },
];

const Goal = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  // Find the goal data with matching id
  const selectedGoal = GoalData.find((goal) => goal.id === Number(id));

  useEffect(() => {
    // Update the data state with selected goal
    if (selectedGoal) {
      setData(selectedGoal);
    }
  }, [id]);

  const handleChange = (taskIndex) => {
    setData((prevData) => {
      const updatedTaskArr = [...prevData.taskArr];
      updatedTaskArr[taskIndex].status = !updatedTaskArr[taskIndex].status;

      const updatedCompTask =
        prevData.compTask + (updatedTaskArr[taskIndex].status ? 1 : -1);

      return {
        ...prevData,
        compTask: updatedCompTask,
        taskArr: updatedTaskArr,
      };
    });
  };

  return (
    <Box>
      <Heading>{data.title}</Heading>
      <Box display={"flex"} justifyContent={"space-between"} px={"10px"}>
        <Text fontSize="lg">Start Date:- 26/06/23</Text>
        <Text fontSize="lg">End Date:- 26/07/23</Text>
      </Box>
      <RangeComponent
        compTask={data.compTask}
        totalTask={data.taskArr?.length}
      />
      <Flex direction="column" gap={"20px"} mt={"10px"}>
        {data.taskArr?.map((ele, i) => (
          <Card key={i} >
            <CardBody display="flex" px={"20px"} gap={"20px"}>
              <Checkbox
                colorScheme="green"
                onChange={() => handleChange(i)}
                isChecked={ele.status}
                size={"lg"}
              ></Checkbox>
              <Text fontSize="lg">{ele.title}</Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default Goal;
