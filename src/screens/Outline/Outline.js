import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import OutlineInput from '../../components/OutlineInput'

const data = ["Nam", 'Duong']
const Outline = () => {
    const [errorUser, setErrorUser] = useState(undefined);
    const [errorPass, setErrorPass] = useState(undefined);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const length = data.length;
    const showError = () => {
        if (pass.length < 6) {
            setErrorPass('Password must be 6 numbers')
            setPass('')
        } else {
            setErrorPass(undefined)
        }
    };
    useEffect(() => {
        for (let i = 0; i < length; i++) {
            if (user === data[i]) {
                setErrorUser('User has been used')
                break
            } else {
                setErrorUser(undefined)
            }
        }
    }, [user])
    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <OutlineInput
                    placeholder="User: "
                    error={errorUser}
                    characterCount={50}
                    value={user}
                    onChangeText={setUser}
                />
            </View>
            <View style={styles.inputBox}>
                <OutlineInput
                    placeholder={'Password: '}
                    error={errorPass}
                    assistiveText={'Password must have 6 numbers'}
                    characterCount={6}
                    value={pass}
                    onChangeText={setPass}
                    keyboardType={'numeric'}
                    secureTextEntry={true}
                />
            </View>
            <Button onPress={showError} title="Button" style={styles.button} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 1,
    },
    inputBox: {
        margin: 20,
    },
})

export default Outline