import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
import { useEffect } from "react";
highcharts3d(Highcharts);
const config = {
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 20,
    },
    renderTo: "box",
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
  useEffect(() => {
    Highcharts.chart(config);
  }, []);
  return <div id="box">{/* <ReactHighcharts config={config}/> */}</div>;
}

export default App;
