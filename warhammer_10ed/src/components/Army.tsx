import { Typography, Button, Row, Col, Dropdown } from "antd"
import Sider from "antd/es/layout/Sider"
import Layout, { Content } from "antd/es/layout/layout"
import { useState } from "react"
const { Text, Paragraph } = Typography


type Unit = {
    key: string;
    label: string;
    pts: number;
    leaders: string[];
    id?: number;
};




const units = [

    {
        label: 'Saint Celestine',
        key: 'celestine',
        pts: 150,
        leaders: []
    },
    {
        label: 'Morvenn Vahl',
        key: 'morvenn',
        pts: 135,
        leaders: []
    },
    {
        label: 'Daemonifuge',
        key: 'daemonifuge',
        pts: 80,
        leaders: []
    },
    {
        label: 'Canoness',
        key: 'canoness',
        pts: 60,
        leaders: []
    },
    {
        label: 'Palantine',
        key: 'palantine',
        pts: 55,
        leaders: []
    },
    {
        label: 'Battle Sisters',
        key: 'battlesisters',
        pts: 110,
        leaders: ['canoness', 'palantine', 'dialogus', 'dogmata', 'hospitaller', 'imagifier']

    },
    {
        label: 'Sacresants',
        key: 'sacresant',
        pts: 65,
        leaders: ['canoness', 'palabtine', 'dialogus', 'dogmata', 'hospitaller', 'imagifier']
    },
    {
        label: 'Dominions',
        key: 'dominion',
        pts: 130,
        leaders: ['palantine', 'dialogus', 'dogmata', 'hospitaller', 'imagifier']
    },
    {
        label: 'Retributors',
        key: 'retributor',
        pts: 130,
        leaders: ['dialogus', 'dogmata', 'hospitaller', 'imagifier']
    },
    {
        label: 'Novitiates',
        key: 'novitiate',
        pts: 90,
        leaders: ['palantine', 'dialogus', 'hospitaller']
    },
    {
        label: 'Repentia  5',
        key: 'repentia',
        pts: 75,
        leaders: []
    },
    {
        label: 'Seraphim 5',
        key: 'seraphim',
        pts: 70,
        leaders: ['celestine']
    },
    {
        label: 'Zephyrim 5',
        key: 'zephyrim',
        pts: 70,
        leaders: ['celestine']
    },
    {
        label: 'Dialogus',
        key: 'dialogus',
        pts: 35,
        leaders: []
    },
    {
        label: 'Dogmata',
        key: 'dogmata',
        pts: 50,
        leaders: []
    },
    {
        label: 'Hospitaller',
        key: 'hospitaller',
        pts: 40,
        leaders: []
    },
    {
        label: 'Imagifier',
        key: 'imagifier',
        pts: 40, leaders: []

    },
    {
        label: 'Paragon Warsuits',
        key: 'warsuit',
        pts: 240,
        leaders: ['morvenn']
    },
    {
        label: 'Rhino',
        key: 'rhino',
        pts: 80,
        leaders: []
    },
    {
        label: 'Immolator',
        key: 'immolator',
        pts: 130,
        leaders: []
    },
    {
        label: 'Exorcist',
        key: 'exorcist',
        pts: 140,
        leaders: []
    }
]

const agents = [
    {
        label: 'Callidus',
        key: 'callidus',
        pts: 115,
        leaders: []
    },
    {
        label: 'Culexus',
        key: 'culexus',
        pts: 85, leaders: []

    },
    {
        label: 'Eversor',
        key: 'eversor',
        pts: 75, leaders: []

    },
    {
        label: 'Vindacare',
        key: 'vindicare',
        pts: 80, leaders: []

    },
    {
        label: 'Greyfax',
        key: 'greyfax',
        pts: 65, leaders: []

    }
]

const enhancements = [
    {
        label: 'Blade of Saint Ellynor',
        key: 'ellynor',
        pts: 15, leaders: []

    },
    {
        label: 'Litanies of Faith',
        key: 'litanies',
        pts: 25, leaders: []

    },
    {
        label: 'Mantle of Ophelia',
        key: 'ophelia',
        pts: 20, leaders: []

    },
    {
        label: 'Saintly Example',
        key: 'example',
        pts: 10, leaders: []

    }
]

const Army = ({ hidden }: { hidden: boolean }) => {

    const [points, setPoints] = useState(0)

    function UnitRows(unit: Unit) {
        const [amount, setAmount] = useState(0)
        function leaderOption(key: string) {
            const leader = units.find(unit => unit.key === key)

            return (
                <option value={key}>{leader?.label}</option>
            )
        }
        return (
            <Row>
                <Col span={6}>
                    <Text type={amount === 0 ? 'secondary' : undefined}>{unit.label}</Text>
                </Col>

                <Col span={6}>
                    {unit.leaders.length === 0 || amount <= 0 ?
                        <></>
                        : <select name="leaders" id="leaders">
                            <option value={""}></option>
                            {unit.leaders.map((key) => leaderOption(key))}
                        </select>}
                </Col>
                <Button size="small" onClick={() => {
                    setAmount(amount - 1);
                    setPoints(points - unit.pts)
                }} disabled={amount <= 0}>-</Button>
                <Paragraph > {amount} </Paragraph>
                <Button size="small" onClick={() => {
                    setAmount(amount + 1)
                    setPoints(points + unit.pts)
                }}>+</Button>

                <Col offset={1} span={3}>
                    <Text>{unit.pts} pts</Text>
                </Col>

            </Row>
        )
    }

    if (!hidden) {
        return <></>;
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