import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native-picasso';

const Home = () => {
  const { t } = useTranslation();
  return (
    <View className="viewCenter">
      <Text>{t('ads.ads1')}</Text>
    </View>
  );
};

export default Home;
