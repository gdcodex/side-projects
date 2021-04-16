import 'antd/dist/antd.css';
import {useState} from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import {Layout, Menu} from 'antd';
import './app.css';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined
} from '@ant-design/icons';
const {  Content, Footer, Sider } = Layout;

const config = {
  chart: {
    type: "area",
    options3d: {
      enabled: false,
      alpha: 10,
    },
    backgroundColor:"#E0E1DD",
  },
  colors:["#8F83DA","#A040A0"],
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
    area: {
      stacking: 'normal',
        lineColor: '#666666',
        lineWidth: 1,
        marker: {
            lineWidth: 1,
            lineColor: '#666666'
        }
    }
},
  xAxis:{
    title:{
      text:''
    }
  },
  yAxis:{
    title:{
      text:'Amount'
    }
  },
  responsive:{
   rules:[
     {
       condition:{
         maxWidth:500
       },
       chartOptions:{
         yAxis:{title:{text:''}},
         subtitle:{text:''},
         legend:{enabled:false}
       }
     }
   ]
  },
  series: [
    {
      name: "Delivered amount",
      data: [
        ["Bananas", 8],
        ["Kiwi", 6],
        ["Mixed nuts", 1],
        ["Oranges", 6],
        ["Apples", 8],
        ["Pears", 9],
        ["Clementines", 4],
        ["Reddish (bag)", 1],
        ["Grapes (bunch)", 1],
      ],
    },
    {
      name: "Produced amount",
      data: [
        ["Bananas", 10],
        ["Kiwi", 5],
        ["Mixed nuts", 1],
        ["Oranges", 9],
        ["Apples", 7],
        ["Pears", 6],
        ["Clementines", 10],
        ["Reddish (bag)", 12],
        ["Grapes (bunch)", 14],
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
          <div className="logo" >D</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} className="itemcustom">
             Analytics
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />} className="itemcustom">
              Dashboard
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />} className="itemcustom">
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }} className="content-container">
            <div  style={{ padding: 24,height:'50%' }}>
            <HighchartsReact  highcharts={Highcharts} options={config} containerProps={{className:"content"}}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Gdai ©2021 </Footer>
        </Layout>
      </Layout>
  
  </div>;
}

export default App;
