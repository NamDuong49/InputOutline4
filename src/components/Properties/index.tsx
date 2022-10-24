import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';

interface Props{
  label: string;
  content: string;
  link: ImageSourcePropType | undefined;
}

export default function Properties(props: Props){
  const [text, setText] = useState('');
  useEffect(() => {
    if (props.content == '') {
      setText('-');
    } else {
      setText(props.content);
    }
  }, [props.content]);
  return (
    <View style={styles.container}>
      <View style={styles.rowLabel}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={props.link} />
        </View>
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <View style={styles.rowContent}>
        <Text style={styles.content}>{text}</Text>
      </View>
    </View>
  );
}
