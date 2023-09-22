import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);


const ChartComponent = ({data}) => {
  const dataSource = {
    chart: {
      caption: "Most popular",
      theme: "fusion",
      decimals: 2,
      pieRadius: '50%',
      yAxisName: 'Stars',
      xAxisName: 'Repos',
      xAxisNameFontSize: '16px',
    },
    data,
  }
  return (
    <ReactFusioncharts
        type="column3d"
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
        
      />
  );
}

export default ChartComponent;
