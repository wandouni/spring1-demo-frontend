import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.less';
import Inner from './inner';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <Inner />
    </View>
  );
}
