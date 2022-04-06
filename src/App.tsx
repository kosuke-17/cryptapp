import React from "react";
import "./App.css";
// v6でSwitchがRoutesに変更した
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  HomePage,
  Navbar,
  Exchanges,
  Cryptocurrencies,
  CryptoDetail,
  News,
} from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coninId" element={<CryptoDetail />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "gray", textAlign: "center" }}
          >
            仮想通貨 <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">ホーム</Link>
            <Link to="/exchanges">両替</Link>
            <Link to="/news">ニュース</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
