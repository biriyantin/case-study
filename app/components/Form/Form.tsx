"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { signupSlice, useSelector, useDispatch, selectResponse, postSignup } from "@/lib/redux";

import { validateEmail } from "../../helpers/mailValidator";

import { Button, Card, Form, Input, Alert } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const response = useSelector(selectResponse);
  const [fullName, setName] = useState("");
  const [email, setMail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [form] = Form.useForm();
  const handleClick = () => {
    if (validateEmail(email)) {
      dispatch(postSignup({ fullName, email }));
      dispatch(signupSlice.actions.saveFullName(fullName));
    } else {
      setEmailError(true);
    }
  };

  useEffect(() => {
    if (response.message === "Signup completed!") {
      router.push("/productsPage");
    }
  });
  return (
    <Card style={{ width: 550, height: 418, padding: 60 }}>
      <Form layout="vertical" form={form} initialValues={{ layout: "vertical" }}>
        <Form.Item label="Adınız Soyadınız">
          <Input size="large" prefix={<UserOutlined />} value={fullName} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email Adresiniz">
          <Input size="large" prefix={<MailOutlined />} status={emailError ? "error" : ""} value={email} onChange={(e) => setMail(e.target.value)} />
        </Form.Item>
        <br />
        <Form.Item>
          <Button type="primary" size="large" block onClick={handleClick}>
            Devam Et
          </Button>
        </Form.Item>
      </Form>
      {emailError && <Alert message="Lütfen mail adresinizi kontrol edin" type="error" showIcon closable />}
    </Card>
  );
}
