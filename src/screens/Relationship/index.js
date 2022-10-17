import {View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Properties from '../../components/Properties';

const Relationship = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/NamDuong49/Relationship/db',
      );
      const json = await response.json();
      setData(json.relationship);
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
      {data.map((item, index) => (
        <View style={styles.itemBox} key={index}>
          <View style={styles.proBox}>
            <Properties
              label="Họ và tên"
              content={item.name}
              link={require('../../../assets/images/person.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Quan hệ"
              content={item.relation}
              link={require('../../../assets/images/relationship.jpg')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Ngày sinh"
              content={item.birth}
              link={require('../../../assets/images/dateofbirth.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Địa chỉ"
              content={item.address}
              link={require('../../../assets/images/address.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Kỳ giảm trừ"
              content={item.deductionPeriod}
              link={require('../../../assets/images/calendar.jpg')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Ghi chú"
              content={item.note}
              link={require('../../../assets/images/note.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Giảm trừ"
              content={item.deduction}
              link={require('../../../assets/images/minus.png')}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Relationship;
