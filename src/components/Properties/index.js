import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

const Properties = ({label, content, link}) => {
  const [text, setText] = useState('');
  useEffect(() => {
    if (content == '') {
      setText('-');
    } else {
      setText(content);
    }
  }, [content]);
  return (
    <View style={styles.container}>
      <View style={styles.rowLabel}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={link} />
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.rowContent}>
        <Text style={styles.content}>{text}</Text>
      </View>
    </View>
  );
};

export default Properties;
