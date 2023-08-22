import './App.css';
import { ConfigProvider, Layout, Menu, theme } from 'antd';
import Sororitas from './Sororitas';
import SumProbabilityTable from './ChargeTable';
import { useState } from 'react';
import Agents from './Agents';
import List from './List';



const { Header } = Layout;
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
 /* {
    label: 'Army',
    key: 'army'
  },
  */
  {
    label: 'List',
    key: 'list'
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

        {<SumProbabilityTable hidden={current === 'charge'} />}
        {<Sororitas hidden={current === 'sororitas'} />}
        {<Agents hidden={current === 'agents'} />}
        {
         // <Army hidden={current === 'army'} />
        }
        {<List hidden={current === 'list'} />}

      </Layout>
    </ConfigProvider>
  );
}

export default App;
