import * as echarts from 'echarts';
import 'echarts-gl';
import $ from 'jquery'

var data = [
    [
      [28604, 77, 17096869, 'Australia', 1990],
      [31163, 77.4, 27662440, 'Canada', 1990],
      [1516, 68, 1154605773, 'China', 1990],
      [13670, 74.7, 10582082, 'Cuba', 1990],
      [28599, 75, 4986705, 'Finland', 1990],
      [29476, 77.1, 56943299, 'France', 1990],
      [31476, 75.4, 78958237, 'Germany', 1990],
      [28666, 78.1, 254830, 'Iceland', 1990],
      [1777, 57.7, 870601776, 'India', 1990],
      [29550, 79.1, 122249285, 'Japan', 1990],
      [2076, 67.9, 20194354, 'North Korea', 1990],
      [12087, 72, 42972254, 'South Korea', 1990],
      [24021, 75.4, 3397534, 'New Zealand', 1990],
      [43296, 76.8, 4240375, 'Norway', 1990],
      [10088, 70.8, 38195258, 'Poland', 1990],
      [19349, 69.6, 147568552, 'Russia', 1990],
      [10670, 67.3, 53994605, 'Turkey', 1990],
      [26424, 75.7, 57110117, 'United Kingdom', 1990],
      [37062, 75.4, 252847810, 'United States', 1990]
    ],
    [
      [44056, 81.8, 23968973, 'Australia', 2015],
      [43294, 81.7, 35939927, 'Canada', 2015],
      [13334, 76.9, 1376048943, 'China', 2015],
      [21291, 78.5, 11389562, 'Cuba', 2015],
      [38923, 80.8, 5503457, 'Finland', 2015],
      [37599, 81.9, 64395345, 'France', 2015],
      [44053, 81.1, 80688545, 'Germany', 2015],
      [42182, 82.8, 329425, 'Iceland', 2015],
      [5903, 66.8, 1311050527, 'India', 2015],
      [36162, 83.5, 126573481, 'Japan', 2015],
      [1390, 71.4, 25155317, 'North Korea', 2015],
      [34644, 80.7, 50293439, 'South Korea', 2015],
      [34186, 80.6, 4528526, 'New Zealand', 2015],
      [64304, 81.6, 5210967, 'Norway', 2015],
      [24787, 77.3, 38611794, 'Poland', 2015],
      [23038, 73.13, 143456918, 'Russia', 2015],
      [19360, 76.5, 78665830, 'Turkey', 2015],
      [38225, 81.4, 64715810, 'United Kingdom', 2015],
      [53354, 79.1, 321773631, 'United States', 2015]
    ]
  ];
  
export const optionscatter = {
    backgroundColor: {
      type: 'radial',
      x: 0.3,
      y: 0.3,
      r: 0.8,
      colorStops: [
        {
          offset: 0,
          color: '#f7f8fa'
        },
        {
          offset: 1,
          color: '#cdd0d5'
        }
      ]
    },
    grid: {
      left: 10,
      containLabel: true,
      bottom: 10,
      top: 10,
      right: 30
    },
    xAxis: {
      splitLine: {
        show: false
      }
    },
    yAxis: {
      splitLine: {
        show: false
      },
      scale: true
    },
    series: [
      {
        name: '1990',
        data: data[0],
        type: 'scatter',
        symbolSize: function(data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function(param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(120, 36, 50, 0.5)',
          shadowOffsetY: 5,
          color: {
            type: 'radial',
            x: 0.4,
            y: 0.3,
            r: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgb(251, 118, 123)'
              },
              {
                offset: 1,
                color: 'rgb(204, 46, 72)'
              }
            ]
          }
        }
      },
      {
        name: '2015',
        data: data[1],
        type: 'scatter',
        symbolSize: function(data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
          focus: 'series',
          label: {
            show: true,
            formatter: function(param) {
              return param.data[3];
            },
            position: 'top'
          }
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(25, 100, 150, 0.5)',
          shadowOffsetY: 5,
          color: {
            type: 'radial',
            x: 0.4,
            y: 0.3,
            r: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgb(129, 227, 238)'
              },
              {
                offset: 1,
                color: 'rgb(25, 183, 207)'
              }
            ]
          }
        }
      }
    ]
};

// const data = [
//     [
//       [28604, 77, 17096869, 'Australia', 1990],
//       [31163, 77.4, 27662440, 'Canada', 1990],
//       [1516, 68, 1154605773, 'China', 1990],
//       [13670, 74.7, 10582082, 'Cuba', 1990],
//       [28599, 75, 4986705, 'Finland', 1990],
//       [29476, 77.1, 56943299, 'France', 1990],
//       [31476, 75.4, 78958237, 'Germany', 1990],
//       [28666, 78.1, 254830, 'Iceland', 1990],
//       [1777, 57.7, 870601776, 'India', 1990],
//       [29550, 79.1, 122249285, 'Japan', 1990],
//       [2076, 67.9, 20194354, 'North Korea', 1990],
//       [12087, 72, 42972254, 'South Korea', 1990],
//       [24021, 75.4, 3397534, 'New Zealand', 1990],
//       [43296, 76.8, 4240375, 'Norway', 1990],
//       [10088, 70.8, 38195258, 'Poland', 1990],
//       [19349, 69.6, 147568552, 'Russia', 1990],
//       [10670, 67.3, 53994605, 'Turkey', 1990],
//       [26424, 75.7, 57110117, 'United Kingdom', 1990],
//       [37062, 75.4, 252847810, 'United States', 1990]
//     ],
//     [
//       [44056, 81.8, 23968973, 'Australia', 2015],
//       [43294, 81.7, 35939927, 'Canada', 2015],
//       [13334, 76.9, 1376048943, 'China', 2015],
//       [21291, 78.5, 11389562, 'Cuba', 2015],
//       [38923, 80.8, 5503457, 'Finland', 2015],
//       [37599, 81.9, 64395345, 'France', 2015],
//       [44053, 81.1, 80688545, 'Germany', 2015],
//       [42182, 82.8, 329425, 'Iceland', 2015],
//       [5903, 66.8, 1311050527, 'India', 2015],
//       [36162, 83.5, 126573481, 'Japan', 2015],
//       [1390, 71.4, 25155317, 'North Korea', 2015],
//       [34644, 80.7, 50293439, 'South Korea', 2015],
//       [34186, 80.6, 4528526, 'New Zealand', 2015],
//       [64304, 81.6, 5210967, 'Norway', 2015],
//       [24787, 77.3, 38611794, 'Poland', 2015],
//       [23038, 73.13, 143456918, 'Russia', 2015],
//       [19360, 76.5, 78665830, 'Turkey', 2015],
//       [38225, 81.4, 64715810, 'United Kingdom', 2015],
//       [53354, 79.1, 321773631, 'United States', 2015]
//     ]
// ];
// export const option = {
//     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
//       {
//         offset: 0,
//         color: '#f7f8fa'
//       },
//       {
//         offset: 1,
//         color: '#cdd0d5'
//       }
//     ]),
//     title: {
//       text: 'Life Expectancy and GDP by Country',
//       left: '5%',
//       top: '3%'
//     },
//     legend: {
//       right: '10%',
//       top: '3%',
//       data: ['1990', '2015']
//     },
//     grid: {
//       left: '8%',
//       top: '10%'
//     },
//     xAxis: {
//       splitLine: {
//         lineStyle: {
//           type: 'dashed'
//         }
//       }
//     },
//     yAxis: {
//       splitLine: {
//         lineStyle: {
//           type: 'dashed'
//         }
//       },
//       scale: true
//     },
//     series: [
//       {
//         name: '1990',
//         data: data[0],
//         type: 'scatter',
//         symbolSize: function (data) {
//           return Math.sqrt(data[2]) / 5e2;
//         },
//         emphasis: {
//           focus: 'series',
//           label: {
//             show: true,
//             formatter: function (param) {
//               return param.data[3];
//             },
//             position: 'top'
//           }
//         },
//         itemStyle: {
//           shadowBlur: 10,
//           shadowColor: 'rgba(120, 36, 50, 0.5)',
//           shadowOffsetY: 5,
//           color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
//             {
//               offset: 0,
//               color: 'rgb(251, 118, 123)'
//             },
//             {
//               offset: 1,
//               color: 'rgb(204, 46, 72)'
//             }
//           ])
//         }
//       },
//       {
//         name: '2015',
//         data: data[1],
//         type: 'scatter',
//         symbolSize: function (data) {
//           return Math.sqrt(data[2]) / 5e2;
//         },
//         emphasis: {
//           focus: 'series',
//           label: {
//             show: true,
//             formatter: function (param) {
//               return param.data[3];
//             },
//             position: 'top'
//           }
//         },
//         itemStyle: {
//           shadowBlur: 10,
//           shadowColor: 'rgba(25, 100, 150, 0.5)',
//           shadowOffsetY: 5,
//           color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
//             {
//               offset: 0,
//               color: 'rgb(129, 227, 238)'
//             },
//             {
//               offset: 1,
//               color: 'rgb(25, 183, 207)'
//             }
//           ])
//         }
//       }
//     ]
// };

var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'];
// prettier-ignore
var days = ['Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
// prettier-ignore
var data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];
export const option = {
  tooltip: {},
  visualMap: {
    max: 20,
    inRange: {
      color: [
        '#313695',
        '#4575b4',
        '#74add1',
        '#abd9e9',
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#f46d43',
        '#d73027',
        '#a50026'
      ]
    }
  },
  xAxis3D: {
    type: 'category',
    data: hours
  },
  yAxis3D: {
    type: 'category',
    data: days
  },
  zAxis3D: {
    type: 'value'
  },
  grid3D: {
    boxWidth: 200,
    boxDepth: 80,
    viewControl: {
      // projection: 'orthographic'
    },
    light: {
      main: {
        intensity: 1.2,
        shadow: true
      },
      ambient: {
        intensity: 0.3
      }
    }
  },
  series: [
    {
      type: 'bar3D',
      data: data.map(function (item) {
        return {
          value: [item[1], item[0], item[2]]
        };
      }),
      shading: 'lambert',
      label: {
        fontSize: 16,
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20,
          color: '#900'
        },
        itemStyle: {
          color: '#900'
        }
      }
    }
  ]
};

