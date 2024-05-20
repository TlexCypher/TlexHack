import { BaseFormValidationSchema } from "@/app/validation/validationSchema";
import { BaseFormInput, ZodMode } from "@/typing";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  VStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

type FormProps = {
  isUsername?: boolean;
  title: string;
  mode: ZodMode;
  onSubmit: (e: BaseFormInput) => void;
};

const Form = ({ isUsername, title, mode, onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BaseFormInput>({
    mode: mode,
    resolver: zodResolver(BaseFormValidationSchema),
  });

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
            {title}
          </Text>
          <FormControl>
            {isUsername && (
              <Box>
                <FormLabel>Username</FormLabel>
                <Input {...register("username")} />
                {errors.username && (
                  <FormHelperText color={"red.500"} fontWeight={"bold"}>
                    {errors.username.message}
                  </FormHelperText>
                )}
              </Box>
            )}
            <Box marginTop={"16px"}>
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
              {title}
            </Button>
          </Center>
        </form>
      </VStack>
    </Center>
  );
};

export default Form;
