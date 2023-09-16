import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);


const ChartComponent = ({data}) => {
  const dataSource = {
    "chart": {
      "caption": "Walmart's net sales",
      "subcaption": "[2006-2018]",
      "xaxisname": "Fiscal year",
      "yaxisname": "Net Sales (In USD)",
      "showvalues": "0",
      "yaxisminvalue": "300",
      "forceyaxisvaluedecimals": "0",
      "plottooltext": "<div>Year : <b>$label</b><hr> Net Sales : <b>$datavalue<b></div>",
      "numberprefix": "$",
      "numbersuffix": "B",
      "theme": "fusion"
    },
    data
  }
  return (
    <ReactFusioncharts
        type="column2d"
        width="100%"
        min-height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
        
      />
  );
}

export default ChartComponent;
