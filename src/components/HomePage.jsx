import React from 'react'       // eslint-disable-next-line
import millify from 'millify';  // eslint-disable-next-line
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic } from 'antd';

const { Title } = Typography;

const HomePage = () => {        // eslint-disable-next-line
    return (
        <>
            <Title level={2} className="heading">Crypto Statistics</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
                <Col span={12}><Statistic title="Total 24 hr Volume" value="5" /></Col>
                <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
            </Row>
        </>
    )
}

export default HomePage
