import React from "react";

import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { user, logout } = useAuth0();

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <br />
      <br />
      <p>{JSON.stringify(user)}</p>
      <br />
      <Button
        type="primary"
        shape="round"
        icon={<LogoutOutlined />}
        size="large"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserProfile;
