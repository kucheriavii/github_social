import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);


const ChartComponent = ({data}) => {
  const dataSource = {
    chart: {
      caption: "Stars per language",
      decimals: 0,
      doughnutRadius: '45%',
      showPercentValues: 0,
      theme: 'candy'
    },
    data,
  }
  return (
    <ReactFusioncharts
        type="doughnut2d"
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
        
      />
  );
}

export default ChartComponent;
