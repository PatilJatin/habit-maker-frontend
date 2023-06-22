import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GoalCart = ({
  id,
  title,
  completeDays,
  totalDays,
  compTask,
  totalTask,
}) => {
  const [borderColor, setborderColor] = useState("");
  const DailyProgress = (compTask / totalTask) * 100;
  const totalProgress = Math.floor((completeDays / totalDays) * 100);

  useEffect(() => {
    if (totalProgress < 1) {
      setborderColor("red");
    } else if (totalProgress <= 25) {
      setborderColor("yellow");
    } else if (totalProgress <= 50) {
      setborderColor("Purple");
    } else if (totalProgress <= 75) {
      setborderColor("teal");
    } else if (totalProgress <= 100) {
      setborderColor("green");
    }
  }, []);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      border={`2px solid ${borderColor}`}
      bgColor={`${borderColor}.300`}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Link to={`/goal/${id}`}>
        <Flex align="center" justify="space-between">
          <Box w="10" h="10" bg="gray.200" borderRadius="full" mr="4">
            <Text>Icon</Text>
          </Box>
          <Text fontSize="lg" fontWeight="bold" mb="2">
            {title}
          </Text>
        </Flex>
        <Text mb="2">Remaining Days: {totalDays - completeDays}</Text>
        <CircularProgress value={totalProgress} size="100px">
          <CircularProgressLabel maxW={"90px"}>
            {/* {`${completeDays} of ${totalDays}`} */}
            {`${totalProgress} %`}
          </CircularProgressLabel>
        </CircularProgress>
      </Link>
    </Box>
  );
};

export default GoalCart;
