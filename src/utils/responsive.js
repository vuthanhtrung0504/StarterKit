import { PixelRatio, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window');
const designWidth = 375;
const designHeight = 667;

export const setFontSize = size => {
  const sizeInPercent = size * (100 / designWidth - 0.025);
  const scaleSize = Platform.select({ ios: 1, android: 0.94 });
  return PixelRatio.roundToNearestPixel(
    (width * sizeInPercent * scaleSize) / 100
  );
};

export const setHorizontal = size =>
  PixelRatio.roundToNearestPixel((width * size) / designWidth);

export const setVertical = size =>
  PixelRatio.roundToNearestPixel((height * size) / designHeight);
