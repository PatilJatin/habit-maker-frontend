import { Box, Flex, Image, Progress, Text } from "@chakra-ui/react";
import React from "react";

const GoalCart = () => {
  return (
    <Box border={"1px solid red"}>
      <Flex justifyContent={"space-around"}>
        <Image src="https://picsum.photos/200" alt="test" />
        <Text textAlign={"center"}>Title</Text>
      </Flex>
      <Progress hasStripe value={20} />
    </Box>
    // <div className="max-w-[400px] max-h-[200px] border border-red-500"  >
    //   <img src="https://picsum.photos/200" alt="test" />
    //   <p>Title</p>
    //   <input type="range" />
    //   <span></span>
    // </div>
  );
};

export default GoalCart;
