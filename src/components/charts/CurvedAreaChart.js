import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const CurvedAreaChart = (props) => {

     const [chartSeries, setChartSeries] = useState([])


     const [chartOptions, setChartOptions] = useState({
               chart: {
                    height: 350,
                    type: 'area',
                    toolbar: {
                         show: false
                    }
               },
               dataLabels: {
                    enabled: false
               },
               stroke: {
                    curve: 'smooth'
          },
          fill: {
               type: "gradient",
               gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 90, 100]
               }
          },
               xaxis: {
                    type: 'Year',
                    categories: ['2016', '2017', '2018', '2019', '2020' ]
               },
               yaxis: {
                    show: true,
                    labels: {
                         formatter: function(value) {
                         return (value/1000000 + "m")
                         }
                    }
               },
                tooltip: {
                    enabled: true,
                    x: {
                         show: false,
                     },
                     marker: {
                         show: false,
                    },
          },
                
 
     })

     useEffect(() => {
          setChartSeries(props.series)
     });

 return (
  <Chart
    options={chartOptions}
    series={chartSeries}
    type="area"
    width="500"
   />
 )
}

export default CurvedAreaChart