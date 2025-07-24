import { Layout, Menu, Button, Image } from 'antd';
import strats1 from '../datasheets/strats_1.png'
import strats2 from '../datasheets/strats_2.png'
import armory from '../datasheets/armory.png'
import enhancements from '../datasheets/enhancements.png'
import celestine1 from '../datasheets/celestine_1.png'
import celestine2 from '../datasheets/celestine_2.png'
import morvenn1 from '../datasheets/morvenn_vahl_1.png'
import morvenn2 from '../datasheets/morvenn_vahl_2.png'
import daemonifuge1 from '../datasheets/daemonifuge_1.png'
import daemonifuge2 from '../datasheets/daemonifuge_2.png'
import canoness1 from '../datasheets/canoness_1.png'
import canoness2 from '../datasheets/canoness_2.png'
import paletine1 from '../datasheets/palentine_1.png'
import paletine2 from '../datasheets/palentine_2.png'
import battlesisters1 from '../datasheets/battlesisters_1.png'
import battlesisters2 from '../datasheets/battlesisters_2.png'
import sacresant1 from '../datasheets/sacresant_1.png'
import sacresant2 from '../datasheets/sacresant_2.png'
import dominion1 from '../datasheets/dominion_1.png'
import dominion2 from '../datasheets/dominion_2.png'
import retributor1 from '../datasheets/retributor_1.png'
import retributor2 from '../datasheets/retributor_2.png'
import novitiate1 from '../datasheets/novitiate_1.png'
import novitiate2 from '../datasheets/novitiate_2.png'
import repentia1 from '../datasheets/repentia_1.png'
import repentia2 from '../datasheets/repentia_2.png'
import seraphim1 from '../datasheets/seraphim_1.png'
import seraphim2 from '../datasheets/seraphim_2.png'
import zephyrim1 from '../datasheets/zephyrim_1.png'
import zephyrim2 from '../datasheets/zephyrim_2.png'
import dialogus1 from '../datasheets/dialogus_1.png'
import dialogus2 from '../datasheets/dialogus_2.png'
import dogmata1 from '../datasheets/dogmata_1.png'
import dogmata2 from '../datasheets/dogmata_2.png'
import hospitaller1 from '../datasheets/hospitaller_1.png'
import hospitaller2 from '../datasheets/hospitaller_2.png'
import imagifier1 from '../datasheets/imagifier_1.png'
import imagifier2 from '../datasheets/imagifier_2.png'
import warsuit1 from '../datasheets/warsuit_1.png'
import warsuit2 from '../datasheets/warsuit_2.png'
import rhino1 from '../datasheets/rhino_1.png'
import rhino2 from '../datasheets/rhino_2.png'
import immolator1 from '../datasheets/immolator_1.png'
import immolator2 from '../datasheets/immolator_2.png'
import exorcist1 from '../datasheets/exorcist_1.png'
import exorcist2 from '../datasheets/exorcist_2.png'


import { useEffect, useState } from 'react';

const { Content, Sider } = Layout;

const items = [
    {
        label: 'Strats',
        key: 'strats',
        img: [strats1, strats2]
    },
    {
        label: 'Enhancements',
        key: 'ehancements',
        img: [enhancements, enhancements]
    },
    {
        label: 'Armory',
        key: 'armory',
        img: [armory, armory]
    },
    {
        label: 'Celestine',
        key: 'celestine',
        img: [celestine1, celestine2]
    },
    {
        label: 'Morvenn',
        key: 'morvenn',
        img: [morvenn1, morvenn2]
    },
    {
        label: 'Daemonifuge',
        key: 'daemonifuge',
        img: [daemonifuge1, daemonifuge2]
    },
    {
        label: 'Canoness',
        key: 'canoness',
        img: [canoness1, canoness2]
    },
    {
        label: 'Palantine',
        key: 'palantine',
        img: [paletine1, paletine2]
    },
    {
        label: 'Battle Sisters',
        key: 'battlesisters',
        img: [battlesisters1, battlesisters2]
    },
    {
        label: 'Sacresant',
        key: 'sacresant',
        img: [sacresant1, sacresant2]
    },
    {
        label: 'Dominion',
        key: 'dominion',
        img: [dominion1, dominion2]
    },
    {
        label: 'Retributor',
        key: 'retributor',
        img: [retributor1, retributor2]
    },
    {
        label: 'Novitiate',
        key: 'novitiate',
        img: [novitiate1, novitiate2]
    },
    {
        label: 'Repentia',
        key: 'repentia',
        img: [repentia1, repentia2]
    },
    {
        label: 'Seraphim',
        key: 'seraphim',
        img: [seraphim1, seraphim2]
    },
    {
        label: 'Zephyrim',
        key: 'zephyrim',
        img: [zephyrim1, zephyrim2]
    },
    {
        label: 'Dialogus',
        key: 'dialogus',
        img: [dialogus1, dialogus2]
    },
    {
        label: 'Dogmata',
        key: 'dogmata',
        img: [dogmata1, dogmata2]
    },
    {
        label: 'Hospitaller',
        key: 'hospitaller',
        img: [hospitaller1, hospitaller2]
    },
    {
        label: 'Imagifier',
        key: 'imagifier',
        img: [imagifier1, imagifier2]
    },
    {
        label: 'Warsuit',
        key: 'warsuit',
        img: [warsuit1, warsuit2]
    },
    {
        label: 'Rhino',
        key: 'rhino',
        img: [rhino1, rhino2]
    },
    {
        label: 'Immolator',
        key: 'immolator',
        img: [immolator1, immolator2]
    },
    {
        label: 'Exorcist',
        key: 'exorcist',
        img: [exorcist1, exorcist2]
    }
];
type Unit = {
    key: string;
    label: string;
    img: string[];
    id?: number;
};

const Sororitas = ({ hidden }: { hidden: boolean }) => {
    const [current, setCurrent] = useState<Unit | undefined>(items[0])
    const [toggle, setToggle] = useState(0)
    const [keys, setKeys] = useState<string[]>([]);

    useEffect(() => {
        if (current)
            setKeys([current?.key])
    }, [current])

    const onClick = (e: { key: string; }) => {
        setCurrent(items.find(item => item.key === e.key))
    }
    if (!hidden) {
        return <></>;
    }
    return (
        <Layout style={{ height: '100vh', overflow: 'hidden' }}>
            <Sider>
                <Menu items={items} mode='vertical' selectedKeys={keys} onClick={onClick} />
            </Sider>
            <Content>
                <div onClick={() => { setToggle(1 - toggle) }}>
                    <Image src={current?.img[toggle]} preview={false} style={{ maxHeight: '100vh' }} />
                </div>
            </Content>
            <Sider />
        </Layout>

    )
}
export default Sororitas