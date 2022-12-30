import { CircularProgress } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <div className="h-[800px] flex justify-center items-center">
      <CircularProgress isIndeterminate color="pink.300" />
    </div>
  );
};

export default Loading;
