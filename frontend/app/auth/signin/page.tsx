"use client";

import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Text,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInValidationSchema } from "@/app/validation/validationSchema";

interface SignInInput {
  email: string;
  password: string;
}

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    mode: "onChange",
    resolver: zodResolver(SignInValidationSchema),
  });

  const onSubmit = (e: SignInInput) => {
    console.log(e);
  };

  return (
    <Center marginTop={"120px"}>
      <VStack
        maxW={"sm"}
        borderWidth={"1px"}
        borderRadius={"xl"}
        overflow={"hidden"}
        padding={"32px"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text fontWeight={"bold"} marginBottom={"16px"} fontSize={"24px"}>
            Sign In
          </Text>
          <FormControl>
            <Box>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" {...register("email")} />
              {errors.email && (
                <FormHelperText color={"red.500"} fontWeight={"bold"}>
                  {errors.email.message}
                </FormHelperText>
              )}
            </Box>
            <Box marginTop={"16px"}>
              <FormLabel>Password</FormLabel>
              <Input type="password" {...register("password")} />
              {errors.password && (
                <FormHelperText color={"red.500"} fontWeight={"bold"}>
                  {errors.password.message}
                </FormHelperText>
              )}
            </Box>
          </FormControl>
          <Center>
            <Button colorScheme="teal" marginTop={"16px"} type="submit">
              Sign In
            </Button>
          </Center>
        </form>
      </VStack>
    </Center>
  );
};

export default SignInPage;
