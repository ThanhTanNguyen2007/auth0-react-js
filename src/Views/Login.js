import React from "react";

import { Button } from "antd";

import { LoginOutlined } from "@ant-design/icons";

const Login = ({ loginWithRedirect }) => {
  return (
    <Button
      type="primary"
      shape="round"
      icon={<LoginOutlined />}
      size="large"
      onClick={() => loginWithRedirect()}
    >
      Login
    </Button>
  );
};

export default Login;
