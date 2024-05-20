"use client";

import Form from "@/components/base/Form";
import { BaseFormInput } from "@/typing";

const onSubmit = (e: BaseFormInput) => {
  console.log(e);
};

const SigninPage = () => {
  return (
    <>
      <Form onSubmit={onSubmit} mode="onChange" title="Sign in" />
    </>
  );
};

export default SigninPage;
