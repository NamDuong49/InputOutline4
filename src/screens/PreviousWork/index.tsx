import {View, Text, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Properties from '../../components/Properties';

const PreviousWork = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/NamDuong49/PreviousWork/db',
      );
      const json = await response.json();
      setData(json.previousWork);
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
              label="Tên công ty"
              content={item.company}
              link={require('../../../assets/images/building.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Chức vụ"
              content={item.position}
              link={require('../../../assets/images/work.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Điện thoại"
              content={item.phone}
              link={require('../../../assets/images/phone.png')}
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
              label="Lương"
              content={item.salary}
              link={require('../../../assets/images/salary.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Quá trình công tác"
              content={item.time}
              link={require('../../../assets/images/calendar.jpg')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Cấp bậc"
              content={item.rank}
              link={require('../../../assets/images/rank.png')}
            />
          </View>
          <View style={styles.proBox}>
            <Properties
              label="Lý do nghỉ"
              content={item.reason}
              link={require('../../../assets/images/note.png')}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default PreviousWork;
