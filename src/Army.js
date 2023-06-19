import { Typography, Button, Row, Col } from "antd"
import Sider from "antd/es/layout/Sider"
import Layout, { Content } from "antd/es/layout/layout"
import { useState } from "react"

const { Text, Paragraph } = Typography

const units = [

    {
        name: 'Saint Celestine',
        key: 'celestine',
        pts: 150
    },
    {
        name: 'Morvenn Vahl',
        key: 'morvenn',
        pts: 135
    },
    {
        name: 'Daemonifuge',
        key: 'daemonifuge',
        pts: 80
    },
    {
        name: 'Canoness',
        key: 'canoness',
        pts: 60
    },
    {
        name: 'Palantine',
        key: 'palantine',
        pts: 55
    },
    {
        name: 'Battle Sisters',
        key: 'battlesisters',
        pts: 110
    },
    {
        name: 'Sacresants',
        key: 'sacresant',
        pts: 65
    },
    {
        name: 'Dominions',
        key: 'dominion',
        pts: 130
    },
    {
        name: 'Retributors',
        key: 'retributor',
        pts: 130
    },
    {
        name: 'Novitiates',
        key: 'novitiate',
        pts: 90
    },
    {
        name: 'Repentia  5',
        key: 'repentia',
        pts: 75
    },
    {
        name: 'Seraphim 5',
        key: 'seraphim',
        pts: 70
    },
    {
        name: 'Zephyrim 5',
        key: 'zephyrim',
        pts: 70
    },
    {
        name: 'Dialogus',
        key: 'dialogus',
        pts: 35
    },
    {
        name: 'Dogmata',
        key: 'dogmata',
        pts: 50
    },
    {
        name: 'Hospitaller',
        key: 'hospitaller',
        pts: 40
    },
    {
        name: 'Imagifier',
        key: 'imagifier',
        pts: 40
    },
    {
        name: 'Paragon Warsuits',
        key: 'warsuit',
        pts: 240
    },
    {
        name: 'Rhino',
        key: 'rhino',
        pts: 80
    },
    {
        name: 'Immolator',
        key: 'immolator',
        pts: 130
    },
    {
        name: 'Exorcist',
        key: 'exorcist',
        pts: 140
    }

]
const agents = [
    {
        name: 'Callidus',
        key: 'callidus',
        pts: 115
    },
    {
        name: 'Culexus',
        key: 'culexus',
        pts: 85,
    },
    {
        name: 'Eversor',
        key: 'eversor',
        pts: 75
    },
    {
        name: 'Vindacare',
        key: 'vindicare',
        pts: 80
    }
]

const enhancements = [
    {
        name: 'Blade of Saint Ellynor',
        key: 'ellynor',
        pts: 15

    },
    {
        name: 'Litanies of Faith',
        key: 'litanies',
        pts: 25
    },
    {
        name: 'Mantle of Ophelia',
        key: 'ophelia',
        pts: 20,
    },
    {
        name: 'Saintly Example',
        key: 'example',
        pts: 10
    }
]



function Army() {
    const [points, setPoints] = useState(0)

    function UnitRows(unit) {
        const [amount, setAmount] = useState(0)

        return (
            <Row>
                <Col span={5}>
                    <Text type={amount === 0 ? 'secondary' : ''}>{unit.name}</Text>
                </Col>
                <Button size="small" onClick={() => {
                    setAmount(amount + 1)
                    setPoints(points + unit.pts)
                }}>+</Button>
                <Paragraph > {amount} </Paragraph>
                <Button size="small" onClick={() => {
                    setAmount(amount - 1);
                    setPoints(points - unit.pts)
                }} disabled={amount <= 0}>-</Button>
                <Col offset={1} span={3}>
                    <Text>{unit.pts} pts</Text>
                </Col>

            </Row>
        )
    }


    return (
        <Layout>
            <Sider></Sider>
            <Content>
                <Row>
                    <Col offset={19}>
                        <Paragraph> Total Points: {points}</Paragraph>
                    </Col>
                    <Col span={12}>
                        {units.map(unit => UnitRows(unit))}
                    </Col>
                    <Col span={12}>
                    <Paragraph>Agents</Paragraph>

                        {agents.map(unit => UnitRows(unit))}
                        <Paragraph>Enhancements</Paragraph>

                        {enhancements.map(unit => UnitRows(unit))}

                    </Col>
                </Row>
            </Content>
            <Sider></Sider>
        </Layout>
    )
}
export default Army