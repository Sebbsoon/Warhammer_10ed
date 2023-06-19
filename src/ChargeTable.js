import { Table } from "antd";
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const columns = [
    {
        title: 'Roll',
        dataIndex: 'sum',
    },
    {
        title: 'Two Dice',
        dataIndex: 'twoDice',
    },
    {
        title: 'Three Dice',
        dataIndex: 'threeDice',
    },
];

const data = [
    {
        key: 1,
        sum: '2+',
        twoDice: '100%',
        threeDice: '100%',
    },
    {
        key: 2,
        sum: '3+',
        twoDice: '97.22%',
        threeDice: '99.54%',
    },
    {
        key: 3,
        sum: '4+',
        twoDice: '91.67%',
        threeDice: '98.61%',
    },
    {
        key: 4,
        sum: '5+',
        twoDice: '83.33%',
        threeDice: '95.83%',
    },
    {
        key: 5,
        sum: '6+',
        twoDice: '72.22%',
        threeDice: '88.89%',
    },
    {
        key: 6,
        sum: '7+',
        twoDice: '58.33%',
        threeDice: '77.78%',
    },
    {
        key: 7,
        sum: '8+',
        twoDice: '41.67%',
        threeDice: '63.89%',
    },
    {
        key: 8,
        sum: '9+',
        twoDice: '27.78%',
        threeDice: '47.22%',
    },
    {
        key: 9,
        sum: '10+',
        twoDice: '16.67%',
        threeDice: '33.33%',
    },
    {
        key: 10,
        sum: '11+',
        twoDice: '8.33%',
        threeDice: '19.44%',
    },
    {
        key: 11,
        sum: '12',
        twoDice: '2.78%',
        threeDice: '9.72%',
    },
];

const SumProbabilityTable = () => {
    return (
        <Layout>
            <Sider></Sider>
            <Content>
                <Table columns={columns} dataSource={data} pagination={false} />

            </Content>
            <Sider></Sider>
        </Layout>
    );
};

export default SumProbabilityTable