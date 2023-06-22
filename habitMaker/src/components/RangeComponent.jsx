import { Box, Progress } from "@chakra-ui/react";

const RangeComponent = ({ compTask, totalTask }) => {
  const percentage = (compTask / totalTask) * 100;

  return (
    <Box width="full">
      <Box textAlign="right" mt={2} fontWeight="bold">
        <Progress
          value={percentage}
          colorScheme="green"
          height="10px"
          borderRadius="md"
          marginBottom="4"
        />
        {`${compTask} of ${totalTask}`}
      </Box>
    </Box>
  );
};

export default RangeComponent;
