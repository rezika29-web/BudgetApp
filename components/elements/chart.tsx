import React from 'react';
import {View} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {Text} from 'react-native-svg';

const Chart = () => {
  const data = [
    {
      key: 1,
      value: 30,
      svg: {fill: 'blue'},
    },
    {
      key: 2,
      value: 60,
      svg: {fill: 'green'},
    },
    {
      key: 3,
      value: 10,
      svg: {fill: 'red'},
    },
  ];

  return (
    <View style={{height: 200}}>
      <PieChart
        style={{height: 200}}
        valueAccessor={({item}) => item.value}
        data={data}
        spacing={0}
        outerRadius={'95%'}>
        <Text
          x="50%"
          y="50%"
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize={20}
          fill="white">
          Pie Chart
        </Text>
      </PieChart>
    </View>
  );
};

export default Chart;
