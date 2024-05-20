import { z } from "zod";

const passwordMinLength = 6;

export const SignInValidationSchema = z.object({
  email: z.string().email({ message: "Invalid mail address." }),
  password: z
    .string()
    .min(passwordMinLength, { message: "Must be 6 or more characters long." }),
});
