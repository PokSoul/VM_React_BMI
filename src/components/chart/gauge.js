import React from 'react';
import ReactEcharts from 'echarts-for-react';
import PropTypes from 'prop-types';

const Line = ({ bmiData }) => {
  var bmiValue = bmiData / 100;

  if (bmiValue < 0.18) {
    bmiValue = 0.2;
  } else if (bmiValue > 0.25 && bmiValue < 0.3) {
    bmiValue = 0.4;
  } else if (bmiValue > 0.3 && bmiValue < 0.4) {
    bmiValue = 0.6;
  } else {
    bmiValue = 0.8;
  }
  console.log(bmiValue);

  const option = {
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
              [0.25, '#7CFFB2'],
              [0.5, '#58D9F9'],
              [0.75, '#FDDD60'],
              [1, '#FF6E76'],
            ],
          },
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-60%'],
          itemStyle: {
            color: 'auto',
          },
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            width: 2,
          },
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'inherit',
            width: 5,
          },
        },
        axisLabel: {
          color: 'auto',
          fontSize: 20,
          distance: -60,
          rotate: 'tangential',
          formatter: function (value) {
            if (value === 0.875) {
              return 'Obésité Massif';
            } else if (value === 0.625) {
              return 'Obésité';
            } else if (value === 0.375) {
              return 'Surpoids';
            } else if (value === 0.125) {
              return 'Normal';
            }
            return '';
          },
        },
        title: {
          offsetCenter: [0, '-10%'],
          fontSize: 20,
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '-35%'],
          valueAnimation: true,
          formatter: function (value) {
            return Math.round(value * 100) + '';
          },
          color: 'auto',
        },
        data: [
          {
            value: bmiValue,
            name: 'Evaluation IMC',
            color: 'auto',
          },
        ],
      },
    ],
  };
  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
};

Line.propTypes = {
  bmiData: PropTypes.array,
};

export default Line;
