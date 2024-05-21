import { DashboardProps } from "@/typing";
import { Text } from "@chakra-ui/react";
import React from "react";

const DashBoard = ({ username }: DashboardProps) => {
  return <Text>Dashboard for {username}!</Text>;
};

export default DashBoard;
