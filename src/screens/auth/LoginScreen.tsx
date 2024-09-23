import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import InputField from '../../components/InputField';

function LoginScreen() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChangeText = (key: string, value: string) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleBlur = (key: string) => {
    setTouched({
      ...touched,
      [key]: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={'이메일을 입력하세요.'}
          inputMode="email"
          value={values.email}
          onChangeText={value => handleChangeText('email', value)}
          onBlur={() => handleBlur('email')}
          touched={touched.email}
        />
        <InputField
          placeholder="비밀번호"
          value={values.password}
          error={'비밀번호를 입력하세요.'}
          onChangeText={value => handleChangeText('password', value)}
          secureTextEntry
          onBlur={() => handleBlur('password')}
          touched={touched.password}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;
