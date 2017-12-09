import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};


const styles = {
  textStyle: {
    fontSize: 50,
  },
  viewStyle: {
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};


export default Header;
