import React from 'react';
import ReactEcharts from "echarts-for-react"; 

const Bar = () => {

    const option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['date','date1','date2'],
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [80,100,70],
            type: 'line',
            areaStyle: {}
          }
        ]
      };

      const option2 = {
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            center: ['50%', '75%'],
            radius: '90%',
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, '#58D9F9'],
                  [0.5,'#7CFFB2' ],
                  [0.75, '#FDDD60'],
                  [1, '#FF6E76']
                ]
              }
            },
            pointer: {
              icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
              length: '12%',
              width: 20,
              offsetCenter: [0, '-60%'],
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: 'auto',
                width: 2
              }
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: 'auto',
                width: 5
              }
            },
            axisLabel: {
              color: '#464646',
              fontSize: 12,
              distance: -40,
              rotate: 'tangential',
              formatter: function (value) {
                if (value === 0.875) {
                  return 'Obésité Morbide';
                } else if (value === 0.625) {
                  return 'Normal';
                } else if (value === 0.375) {
                  return 'Obèse';
                } else if (value === 0.125) {
                  return 'Maigre';
                }
                return '';
              }
            },
            title: {
              offsetCenter: [0, '-10%'],
              fontSize: 20
            },
            detail: {
              fontSize: 30,
              offsetCenter: [0, '-35%'],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) + '';
              },
              color: 'auto'
            },
            data: [
              {
                value: 0.7,
                name: 'Grade Rating'
              }
            ]
          }
        ]
      };
        return (
            <div>
                <ReactEcharts option={option} />
            <ReactEcharts option={option2} />
            </div>
        );
    
}
export default Bar;