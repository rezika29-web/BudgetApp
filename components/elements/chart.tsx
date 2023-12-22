import React from 'react';
import {PieChart} from 'react-native-svg-charts';
import {Text} from 'react-native-svg';
const Chart = () => {
  const data = [
    {
      key: 1,
      name: 'income',
      value: 70,
      svg: {fill: 'gray'},
    },
    {
      key: 2,
      name: 'expanse',
      value: 30,
      svg: {fill: 'pink'},
    },
  ];

  const RenderLabels = ({slices, height, width}) => {
    return slices.map((slice, index) => {
      const {labelCentroid, pieCentroid, data} = slice;

      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[0]}
          fill={'black'}
          textAnchor={'middle'}
          fontSize={18}
          strokeWidth={0.7}
          fontWeight="bold">
          {data.name}
          <Text
            key={index}
            x={labelCentroid[0]}
            y={labelCentroid[2]}
            fill={'black'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={14}
            stroke={'black'}
            strokeWidth={0.2}
            fontWeight="bold">
            {`${data.value}%`}
          </Text>
        </Text>
      );
    });
  };

  return (
    <PieChart
      style={{height: 250}}
      valueAccessor={({item}) => item.value}
      data={data}
      spacing={0}
      outerRadius={'95%'}>
      <RenderLabels />
    </PieChart>
  );
};

export default Chart;
