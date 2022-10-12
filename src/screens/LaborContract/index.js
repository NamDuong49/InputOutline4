import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'
import Properties from '../../components/Properties'

const LaborContract = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/NamDuong49/LaborContract/db');
            const json = await response.json();
            setData(json.laborContract);
        } catch (error) {
            console.error(error);
        } finally {
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <ScrollView style={styles.container}>
            {data.map((item, index) => (
                <View style={styles.itemBox} key={index}>
                    <View style={styles.proBox}>
                        <Properties
                            label='Số hợp đồng'
                            content={item.number}
                            link={require('../../../assets/images/building.png')}
                        />
                    </View>
                    <View style={styles.proBox}>
                        <Properties
                            label='Thời gian'
                            content={item.time}
                            link={require('../../../assets/images/work.png')}
                        />
                    </View>
                    <View style={styles.proBox}>
                        <Properties
                            label='Người ký'
                            content={item.boss}
                            link={require('../../../assets/images/phone.png')}
                        />
                    </View>
                    <View style={styles.proBox}>
                        <Properties
                            label='Ngày ký'
                            content={item.signDay}
                            link={require('../../../assets/images/address.png')}
                        />
                    </View>
                    <View style={styles.proBox}>
                        <Properties
                            label='Chức danh người ký'
                            content={item.bossPosition}
                            link={require('../../../assets/images/salary.png')}
                        />
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

export default LaborContract