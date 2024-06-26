export interface BaseFormInput {
  username?: string;
  email: string;
  password: string;
}

export type ZodMode =
  | "onSubmit"
  | "onBlur"
  | "onChange"
  | "onTouched"
  | "all"
  | undefined;
