import React from 'react';
import { Table,Statistic, Row, Col } from 'antd';
export default class Home extends React.Component {
    
    render() {
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
          }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
          }];
          
          const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          }];
            const Countdown = Statistic.Countdown;
            const deadline = Date.now() + 1000 * 60 * 60 * 24 * 1 + 1000 * 30;
            function onFinish() {
                console.log('finished!');
            }
        return (
            <div>
                <div className="header">
                <Row gutter={16}>
                  
                    <Col span={12}>
                    <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                    </Col>
                </Row>
                </div>
                <Table dataSource={dataSource} columns={columns} />  
            </div>
        )
    }
}