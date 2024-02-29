import React from 'react';
import {Image} from 'react-native';

function CustomImage({originPath, file, style}) {
  const path = originPath + '/' + file;
  const styles = style || {width: 40, height: 40, marginLeft: 15};

  return <Image style={styles} source={{uri: path}} resizeMode="stretch" />;
}

export default CustomImage;
