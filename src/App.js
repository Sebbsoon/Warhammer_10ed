import './App.css';
import { ConfigProvider, Layout, Menu, theme } from 'antd';
import Sororitas from './Sororitas';
import SumProbabilityTable from './ChargeTable';
import Army from './Army';
import { useState } from 'react';
import Agents from './Agents';



const { Header, Content, Footer, Sider } = Layout;
const items = [
  {
    label: 'Charge Table',
    key: 'charge',
  },
  {
    label: 'Sororitas',
    key: 'sororitas',
  },
  {
    label: 'Agents',
    key: 'agents'
  }
  ,
  {
    label: 'Army',
    key: 'army'
  }
]

function App() {

  const [current, setCurrent] = useState('charge')
  const onClick = (e) => {
    setCurrent(e.key)
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}>
      <Layout>
        <Header>
          <Menu items={items} selectedKeys={current} onClick={onClick} mode='horizontal'></Menu>
        </Header>

        {current === 'charge' && <SumProbabilityTable />}
        {current === 'sororitas' && <Sororitas />}
        {current === 'agents' && <Agents />}
        {current === 'army' && <Army />}

      </Layout>
    </ConfigProvider>
  );
}

export default App;
