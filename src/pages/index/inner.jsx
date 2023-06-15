import { View, Text } from '@tarojs/components';
// import Taro from '@tarojs/taro';
import { useEffect } from 'react';
// import { getHost } from '@/utils';

export default function Index() {
  const fetchData = async () => {
    // const res = await Taro.request({
    //   url: getHost('/api/ingredients/getIngredients'),
    // });
    // console.log('res: ', res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View className="inner index">
      <Text>inner Hello world!</Text>
    </View>
  );
}
