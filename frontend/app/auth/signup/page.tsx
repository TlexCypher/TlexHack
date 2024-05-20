"use client";

import Form from "@/components/base/Form";
import { BaseFormInput } from "@/typing";
import React from "react";

const onSubmit = (e: BaseFormInput) => {
  console.log(e);
};

const SignUpPage = () => {
  return (
    <>
      <Form
        onSubmit={onSubmit as (e: BaseFormInput) => {}}
        mode="onChange"
        title="Sign up"
        isUsername={true}
      />
    </>
  );
};

export default SignUpPage;
