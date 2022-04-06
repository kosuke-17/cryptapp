import { millify } from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const HomePage = () => {
  return (
    <>
      <Title level={2} className="heading">
        グローバル暗号ステータス
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="合計 暗号資産" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="合計 為替" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="合計 マーケットキャプ" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="合計 24時間合計" value="5" />
        </Col>
        <Col span={12}>
          <Statistic title="合計 マーケット" value="5" />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
