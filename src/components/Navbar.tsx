import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        {/* ロゴイメージの画像 */}
        <Avatar src="img/blockchain.png" size="small" />
        {/* ロゴ用の文字 */}
        <Typography.Title level={2} className="logo">
          <Link to="/">cryptverse</Link>
        </Typography.Title>
      </div>
      {/* ナビゲーションのアイテム */}
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">ホーム</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">暗号通貨</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">両替</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">ニュース</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
