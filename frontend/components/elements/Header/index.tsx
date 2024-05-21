import { Button, Flex, Heading, HStack } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex
      as={"header"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"16px"}
      bgColor={"teal.400"}
      color={"white"}
    >
      <Heading as={"h1"} fontSize={"2xl"}>
        TlexHack
      </Heading>
    </Flex>
  );
};

export default Header;
