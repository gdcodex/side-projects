import {useState} from 'react'
import 'antd/dist/antd.css';
import ReactHighcharts from "react-highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import {Layout, Menu} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
highcharts3d(ReactHighcharts.Highcharts);
const config = {
  chart: {
    type: "column",
    options3d: {
      enabled: false,
      alpha: 10,
    },
    backgroundColor:"#E0E1DD",
  },
  credits:{
    enabled:false
  },
  title: {
    text: "Contents of Highsoft's weekly fruit delivery",
  },
  subtitle: {
    text: "3D donut in Highcharts",
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45,
    },
  },
  colors:["#415A77"],
  series: [
    {
      name: "Delivered amount",
      data: [
        ["Bananas", 8],
        ["Kiwi", 3],
        ["Mixed nuts", 1],
        ["Oranges", 6],
        ["Apples", 8],
        ["Pears", 4],
        ["Clementines", 4],
        ["Reddish (bag)", 1],
        ["Grapes (bunch)", 1],
      ],
    },
  ],
};

function App() {
  const [collapsed, setcollapsed] = useState({collapsed:false});
  const onCollapse=(x)=>{
    setcollapsed(x)
  }
  return <div id="box">
   <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <ReactHighcharts config={config}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Gdai ©2021 </Footer>
        </Layout>
      </Layout>
  
  </div>;
}

export default App;
