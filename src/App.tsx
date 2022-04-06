import React from "react";
import "./App.css";
// v6でSwitchがRoutesに変更した
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  // Homepage,
  // Exchanges,
  // Cryptocurrencies,
  // CryptoDetail,
  // News,
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
              <Route path="/">
                ホームページ
                {/* <Homepage /> */}
              </Route>
              <Route path="/exchanges">
                両替
                {/* <Exchanges /> */}
              </Route>
              <Route path="/cryptocurrencies">
                暗号通貨
                {/* <Cryptocurrencies /> */}
              </Route>
              <Route path="/crypto/:coninId">
                暗号通貨詳細
                {/* <CryptoDetail /> */}
              </Route>
              <Route path="/news">
                ニュース
                {/* <News/> */}
              </Route>
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
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
  );
};

export default App;
