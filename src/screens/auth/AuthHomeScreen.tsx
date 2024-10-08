import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Dimensions, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {authNavigations} from '@/constants';
import CustomButton from '@/components/CustomButton';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/MATZIP.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인"
          onPress={() => {
            navigation.navigate(authNavigations.LOGIN);
          }}
        />
        <CustomButton
          label="회원가입"
          variant="outlined"
          onPress={() => {
            navigation.navigate(authNavigations.SIGNUP);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  imageContainer: {
    width: Dimensions.get('screen').width * 0.5,
    flex: 1.5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
    flexDirection: 'column',
  },
});

export default AuthHomeScreen;
