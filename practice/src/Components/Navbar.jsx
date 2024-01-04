/*import React from "react";
import { Menu, Dropdown } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  EnvironmentOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { FaLocationArrow } from "react-icons/fa";

const { SubMenu } = Menu;

const Navbar = () => {
  const profileMenu = (
    <Menu style={{ background: "#f7f7f7", border: "1px solid #ddd" }}>
      <Menu.Item key="profile">
        <AimOutlined style={{ marginRight: "5px", color: "#FF6C22" }} />
        Use My Current Location
      </Menu.Item>
      <Menu.Item key="logout">
        <FaLocationArrow style={{ marginRight: "5px", color: "#ff6C22" }} />{" "}
        Saved Address
      </Menu.Item>
    </Menu>
  );

  return (
    <Menu
      mode="horizontal"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 50px",
      }}
    >
      <Menu.Item
        key="home"
        icon={<HomeOutlined />}
        style={{ marginRight: "auto" }}
      >
        Home
      </Menu.Item>
      <Dropdown overlay={profileMenu} placement="bottomCenter">
        <span style={{ cursor: "pointer", color: "#FF6C22" }}>
          <EnvironmentOutlined
            style={{ marginRight: "5px", color: "#FF6C22" }}
          />
          Location
        </span>
      </Dropdown>
      <SubMenu
        key="settings"
        icon={<SettingOutlined />}
        title="Settings"
        style={{ marginLeft: "auto" }}
      >
        <Menu.Item key="account">Account Settings</Menu.Item>
        <Menu.Item key="preferences">Preferences</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Navbar;*/



import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  EnvironmentOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { FaLocationArrow } from "react-icons/fa";
import MapContainer from "./Map/MapContainer";

const { SubMenu } = Menu;

const Navbar = () => {
  const [showMap, setShowMap] = useState(false);

  const profileMenu = (
    <Menu style={{ background: "#f7f7f7", border: "1px solid #ddd" }}>
      <Menu.Item key="profile" onClick={() => setShowMap(true)}>
        <AimOutlined style={{ marginRight: "5px", color: "#FF6C22" }} />
        Use My Current Location
      </Menu.Item>
      <Menu.Item key="logout">
        <FaLocationArrow style={{ marginRight: "5px", color: "#ff6C22" }} />{" "}
        Saved Address
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Menu
        mode="horizontal"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 50px",
        }}
      >
        <Menu.Item
          key="home"
          icon={<HomeOutlined />}
          style={{ marginRight: "auto" }}
        >
          Home
        </Menu.Item>
        <Dropdown overlay={profileMenu} placement="bottomCenter">
          <span style={{ cursor: "pointer", color: "#FF6C22" }}>
            <EnvironmentOutlined
              style={{ marginRight: "5px", color: "#FF6C22" }}
            />
            Location
          </span>
        </Dropdown>
        <SubMenu
          key="settings"
          icon={<SettingOutlined />}
          title="Settings"
          style={{ marginLeft: "auto" }}
        >
          <Menu.Item key="account">Account Settings</Menu.Item>
          <Menu.Item key="preferences">Preferences</Menu.Item>
        </SubMenu>
      </Menu>
      {showMap && <div style={{ width: "100%", height: "350px" }}><MapContainer /></div>}
    </div>
  );
};

export default Navbar;
