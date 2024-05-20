import { z } from "zod";

const usernameMinLength = 3;
const passwordMinLength = 6;

export const BaseFormValidationSchema = z.object({
  username: z
    .string()
    .min(usernameMinLength, { message: "Must be 3 or more characters long." })
    .optional(),
  email: z.string().email({ message: "Invalid mail address." }),
  password: z
    .string()
    .min(passwordMinLength, { message: "Must be 6 or more characters long." }),
});
