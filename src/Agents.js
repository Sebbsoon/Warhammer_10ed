import { Button, Image, Layout, Menu } from "antd";
import { useState } from "react";
import callidus_1 from './agents/callidus_1.png'
import callidus_2 from './agents/callidus_2.png'
import culexus_1 from './agents/culexus_1.png'
import culexus_2 from './agents/culexus_2.png'
import eversor_1 from './agents/eversor_1.png'
import eversor_2 from './agents/eversor_2.png'
import vindicare_1 from './agents/vindicare_1.png'
import vindicare_2 from './agents/vindicare_2.png'
import greyfax_1 from './agents/greyfax_1.png'
import greyfax_2 from './agents/greyfax_2.png'

const { Sider, Content } = Layout

const items = [
    {
        label: 'Callidus',
        key: 'callidus',
        img: [callidus_1, callidus_2]
    },
    {
        label: 'Culexus',
        key: 'culexus',
        img: [culexus_1, culexus_2]
    },
    {
        label: 'Eversor',
        key: 'eversor',
        img: [eversor_1, eversor_2]
    },
    {
        label: 'Vindicare',
        key: 'vindicare',
        img: [vindicare_1, vindicare_2]
    },
    {
        label: 'Greyfax',
        key: 'greyfax',
        img: [greyfax_1, greyfax_2]
    }
]
function Agents(hidden) {
    const [current, setCurrent] = useState(items[0])
    const [toggle, setToggle] = useState(0)

    const onClick = (e) => {
        setCurrent(items.find(item => item.key === e.key))
    }
    const prop = hidden
    console.log(prop.hidden)
    if (!prop.hidden) {
        return;
    }

    return (
        <Layout>
            <Sider>
                <Menu items={items} mode='vertical' selectedKeys={current?.key} onClick={onClick} />
            </Sider>
            <Content>
                <Button hidden on onClick={() => { setToggle(1 - toggle) }} style={{ border: '0' }}>
                    <Image src={current.img[toggle]} preview={false} />
                </Button>

            </Content>
            <Sider></Sider>
        </Layout>
    )
}
export default Agents