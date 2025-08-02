import { ConfigProvider, Layout, Menu, theme } from 'antd';
import { SetStateAction, useEffect, useState } from 'react';
import Sororitas from './components/Sororitas';
import SumProbabilityTable from './components/ChargeTable';
import Agents from './components/Agents';
import List from './components/List';
import Army from './components/Army';

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

  const onClick = (e: { key: string }) => {
    setCurrent(e.key)
  }
  useEffect(() => { console.log(current) }, [current])
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}>
      <Layout>
        <Header>
          <Menu items={items} selectedKeys={[current]} onClick={onClick} mode='horizontal'></Menu>
        </Header>

        {<SumProbabilityTable hidden={current === 'charge'} />
        }
        {<Sororitas hidden={current === 'sororitas'} />
        }
        {<Agents hidden={current === 'agents'} />
        }
        {
          // <Army hidden={current === 'army'} />
        }
        {<List hidden={current === 'list'} />
        }

      </Layout>
    </ConfigProvider>
  );
}

export default App;