import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Properties from '../../components/Properties';

interface ItemProps {
  position: string | null;
  time: string | null;
  department: string | null;
  signDay: string | null;
  boss: string | null;
  bossPosition: string | null;
}

const CurrentWork = (item: ItemProps) => {
  return (
    <View style={styles.itemBox}>
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
  );
};

export default CurrentWork;
