import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white',
    padding: 5,
  },
  rowLabel: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 2,
  },
  imageBox: {
    marginRight: 10,
  },
  image: {
    height: 20,
    width: 20,
  },
  label: {
    fontSize: 13,
    color: '#a19a99',
  },
  rowContent: {
    // height: '49%',
  },
  content: {
    fontSize: 13,
    color: 'black',
    marginLeft: 30,
  },
});

export default styles;
