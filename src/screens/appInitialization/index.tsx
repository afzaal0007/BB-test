import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/core';
import SplashScreen from 'react-native-splash-screen';
import styles from './styles';

const AppInitialization = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const initAppFlow = async () => {
      try {
        const token = '';

        if (!token) {
          throw new Error('User is not authorized.');
        }
        // fetch profile data
        return navigation.dispatch(StackActions.replace('PrivateStack'));
      } catch {
        return navigation.dispatch(StackActions.replace('PublicStack'));
      }
    };

    SplashScreen.hide();

    initAppFlow();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={'skyblue'} size={48} />
    </SafeAreaView>
  );
};

export default AppInitialization;
