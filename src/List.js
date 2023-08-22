import { Layout, Dropdown, Space, Typography, Row, Col, Button } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import items from "./Units";
const { Text } = Typography
const { Content, Sider } = Layout


function List(hidden) {
    const [units, setUnits] = useState([])
    const [points, setPoints] = useState(0)
    const [rows, setRows] = useState([])

    function leaderOption(key) {
        const leader = items.find(unit => unit.key === key)
        return (
            <option value={key}>{leader?.label}</option>
        )
    }

    function freeId() {
        const existingIds = new Set();
        for (let obj of units) {
            if (obj.hasOwnProperty('id')) {
                existingIds.add(obj.id);
            }
        }
        let freeId = 1;
        while (existingIds.has(freeId)) {
            freeId++;
        }
        return (freeId);
    }

    function onClick(e) {
        const unit = items.find(unit => unit.key === e.key)
        const id = freeId()
        unit.id = id
        setUnits([...units, unit])
        setRows([...rows, { id: id, pts: unit.pts, att1: 0, att2: 0 }])
    }

    useEffect(() => {
        let pts = 0;
        rows.map((row) => {
            return (
                pts = pts + row.pts + row.att1 + row.att2);
        });
        setPoints(pts)
    }, [rows]);

    function calcPoints() {
        let pts = 0;
        rows.map((row) => {
            return (
                pts = pts + row.pts + row.att1 + row.att2);
        });
        setPoints(pts)
    }

    function UnitRows(unit) {
        function removeUnit(id) {
            const newArray = [...units]
            const newRows = [...rows]
            const index = newArray.findIndex(unit => unit.id === id);
            if (index !== -1) {
                newArray.splice(index, 1);
                newRows.splice(index, 1)
            }
            setUnits(newArray)
            setRows(newRows)
        }

        function handleSelection(event) {
            const key = event.target.value;
            const unit = items.find(unit => unit.key === key)
            const id = event.target.id
            const newRows = rows
            const index = rows.findIndex(row => row.id === id)
            newRows[index].att1 = unit?.pts
            setRows(newRows)
            calcPoints()
        }

        return (
            <Row key={unit.id}>
                <Col offset={1} span={4}>
                    <Text>{unit.label}</Text>
                </Col>
                <Col span={15}>
                    {unit.leaders.length === 0 ?
                        <></>
                        : unit.key === 'battlesisters' ?
                            <form >
                                <select name="leaders" id={unit.id} onChange={(event) => handleSelection(event)}>
                                    <option value={""}></option>
                                    {unit.leaders.map((key) => leaderOption(key))}
                                </select>
                                <select name="leaders" id={unit.id} onChange={(event) => handleSelection(event)}>
                                    <option value={""}></option>
                                    {unit.leaders.map((key) => leaderOption(key))}
                                </select>
                            </form>
                            :
                            <form>
                                <select name="leaders" id={unit.id} onChange={(event) => handleSelection(event)}>
                                    <option value={""}></option>
                                    {unit.leaders.map((key) => leaderOption(key))}
                                </select>
                            </form>
                    }

                </Col>
                <Col offset={1}>
                </Col>
                <Col>
                    <Button onClick={() => removeUnit(unit.id)}>
                        Remove
                    </Button>
                </Col>
            </Row>
        )
    }
    const prop = hidden
    if (!prop.hidden) {
        return;
    }


    return (
        <Layout>
            <Sider></Sider>
            <Content>
                <Row>
                    <Col offset={1}>
                        <Dropdown menu={{ items, onClick }}>
                            <button style={{background:'black',
                        margin:0,
                        padding:0,
                        border:0}}>
                                <Space>
                                    <Button>
                                        <Text> Add Unit</Text>
                                        <DownOutlined />
                                    </Button>
                                </Space>
                            </button>
                        </Dropdown>
                    </Col>
                    <Col offset={18}>
                        <Text>
                            {points}
                        </Text>
                    </Col>
                </Row>
                {units.map(unit => UnitRows(unit))}
            </Content>
            <Sider></Sider>
        </Layout>
    )
}
export default List