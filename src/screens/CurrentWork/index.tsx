import {View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Properties from '../../components/Properties';

const CurrentWork = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/NamDuong49/CurrentWork/db',
      );
      const json = await response.json();
      setData(json.currentWork);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView style={styles.container}>
      {data.map((item: any, index: number) => (
        <View style={styles.itemBox} key={index}>
          <View style={styles.proBox}>
            <Properties
              label="Chức danh"
              content={item.position}
              link={require('../../../assets/images/building.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Quá trình công tác"
              content={item.time}
              link={require('../../../assets/images/work.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Bộ phận"
              content={item.department}
              link={require('../../../assets/images/phone.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Ngày ký"
              content={item.signDay}
              link={require('../../../assets/images/address.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Người ký"
              content={item.boss}
              link={require('../../../assets/images/salary.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Chức danh người ký"
              content={item.bossPosition}
              link={require('../../../assets/images/calendar.jpg')}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default CurrentWork;
