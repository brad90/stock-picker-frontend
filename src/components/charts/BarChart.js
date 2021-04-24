import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const BarChart = (props) => {

     const [chartSeries, setChartSeries] = useState([])


     const [chartOptions, setChartOptions] = useState({
               chart: {
               height: '100%',
                    width: '100%',
                    type: 'bar',
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
               responsive: [{
               breakpoint: 2000,
                    options: {
                         width: '100%',
                         height: '100%',
               },
               }],
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
    type="bar"
    width="500"
   />
 )
}

export default BarChart